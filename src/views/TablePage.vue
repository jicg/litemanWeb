<script lang="ts">
import {ref, computed, onMounted, defineComponent} from "vue";
import {getTable} from "../common/table";
import SimpleLayout from "../components/SimpleLayout.vue";
import ListQuery from "../components/ListQuery.vue";
import ListData from "../components/ListData.vue";

export default defineComponent({
  components: {ListData, ListQuery, SimpleLayout},
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
    <el-container  direction="vertical" ref="root" v-loading="tableData.loading"
                  style="min-height: 200px;width: 100%;padding: 6px;"
                  element-loading-text="拼命加载中"
                  element-loading-spinner="el-icon-loading">
      <div class="el-border">
        <list-query :qs="tableData.qs" @query="query"/>
      </div>
      <div class="el-border" style="margin-top: 6px;">
        <list-data></list-data>
      </div>
    </el-container>
  </simple-layout>
</template>
<style scoped>

</style>