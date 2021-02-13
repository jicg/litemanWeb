<script lang="ts">
import {ref, computed, onMounted, defineComponent} from "vue";
import {getTable} from "../common/table";
import SimpleLayout from "../components/SimpleLayout.vue";
import ListQuery from "../components/ListQuery.vue";

export default defineComponent({
  components: {ListQuery, SimpleLayout},
  props: {
    tableCode: {
      type: String,
    }
  },
  setup(props, ctx) {


    return {...getTable(props, ctx)};
  },
  name: "TablePage"
});
</script>

<template>
  <simple-layout :loading="tableData.loading" :error="tableData.error">
    <el-container ref="root" v-loading="tableData.loading"
                  style="min-height: 200px;"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading">
      <list-query :qs="qs" @query="query"></list-query>
    </el-container>
  </simple-layout>
</template>
<style scoped>

</style>