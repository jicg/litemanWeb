<script lang="ts">
import {defineComponent, ref} from "vue";
import HamBurger from "./HamBurger.vue";

export default defineComponent({
  components: {HamBurger},
  props: {
    showMenu: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    error: Error,
    collapse: Boolean,
  },
  emits: ["update:collapse"],
  setup(props, ctx) {
    let collapse = ref(props.collapse)
    const onCollapse = function () {
      collapse.value = !collapse.value;
      ctx.emit("update:collapse", collapse.value);
    }
    return {
      onCollapse
    };
  },
  name: "Layout"
});
</script>

<template>
  <div class="wrapper" v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <div class="top">
      <div class="top-left" :style="collapse?'width: 60px;':'width: 240px;'">
        <slot name="top-left"/>
        <!--        <ham-burger  style="position: absolute;bottom: 0;left: 0;" :is-open="true"/>-->
      </div>
      <i v-if="showMenu" :class="collapse?'el-icon-s-unfold':'el-icon-s-fold'" @click="onCollapse"
         style="line-height: 60px;padding: 0 20px;"/>
      <slot name="top-main"/>
    </div>
    <div class="main">
      <div class="main-left" v-if="showMenu" :style="collapse?'width: 60px;':'width: 240px;'">
        <el-scrollbar>
          <slot name="main-left"/>
        </el-scrollbar>
      </div>
      <div class="container" style="padding: 3px;">

        <el-scrollbar>
          <el-alert v-if="error!=null" type="error">{{ error.message }}</el-alert>
          <slot/>
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrapper {
  height: 100%;
}

.top {
  display: flex;
  position: absolute;
  height: 60px;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: white;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.top .top-left {
  transition: width 500ms;
  line-height: 60px;
  text-align: center;
  position: relative;
}

.main {
  width: 100%;
  height: 100%;
  padding-top: 60px;
  display: flex;
}

.main > .main-left {
  transition: width 500ms;
  overflow: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}

.main > .container {
  flex: 1;
  overflow: auto;

}

</style>

