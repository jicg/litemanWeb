<script lang="ts">
import {defineComponent, ref} from "vue";
import HamBurger from "./HamBurger.vue";

export default defineComponent({
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
  <el-container direction="vertical" v-if="error==null" v-loading="loading"
                style="min-height: 200px;"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading">

    <slot></slot>

  </el-container>
  <el-alert v-if="!loading&&error!=null" type="error">{{error +" "+ error?.response?.data?.message }}</el-alert>
</template>

