<script lang="ts">
import {defineComponent, ref} from "vue";
import HamBurger from "./HamBurger.vue";

export default defineComponent({
  components: {HamBurger},
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    error: Error,
  },
  setup(props, ctx) {
    return {};
  },
  name: "SimpleLayout"
});
</script>

<template>
  <div  v-loading="loading"
        style="min-height: 200px;"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading">
    <slot v-if="!loading&&error==null"/>
    <el-alert v-if="!loading&&error!=null" type="error">{{ error.message }}</el-alert>
  </div>
</template>

