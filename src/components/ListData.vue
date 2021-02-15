<script lang="ts">
import {defineComponent, ref, shallowReactive} from "vue";

export default defineComponent({
  props: {},
  setup(props, ctx) {
    let multipleSelection = null;
    const handleSelectionChange = (val) => {
      multipleSelection = val;
      console.log(multipleSelection)
    }
    const formatter = (row, column) => {
      return row.address;
    }
    const handleSortChange = (val) => {
      console.log(val)
    }
    const getSummaries = (param) => {
      const {columns, data} = param;
      console.log(param)
      return [];
    }

    const handleSizeChange = (val) => {
      console.log(val)
    };
    const handleCurrentChange = (val) => {
      console.log(val)
    };
    const currentPage = ref(0)
    return {
      multipleSelection,
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
       handleSelectionChange, formatter, handleSortChange, getSummaries,
      handleSizeChange, handleCurrentChange, currentPage

    }
  },
  name: "ListData"
});
</script>

<template>
  <el-container direction="horizontal" >
    <el-pagination
        style="margin-bottom: 6px;"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
    <div style="width: 100%;height: 1px;text-align: right">
    <el-button size="mini">新增</el-button>
    <el-button size="mini">新增</el-button>
    <el-button size="mini">新增</el-button>
    </div>
  </el-container>
  <el-table
      size="mini"
      border
      stripe
      :data="tableData"
      :default-sort="{prop: 'date', order: 'descending'}"
      style="width: 100%"
      :summary-method="getSummaries"
      show-summary
      @sort-change="handleSortChange"
      @selection-change="handleSelectionChange">
    <el-table-column
        type="selection"
        width="55">
    </el-table-column>
    <el-table-column
        prop="date"
        sortable
        label="日期"
        :formatter="formatter"
        width="180">
      <template #default="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        width="180">
    </el-table-column>
    <el-table-column
        prop="address"
        label="地址"
        show-overflow-tooltip>
    </el-table-column>
  </el-table>
</template>
<style scoped>

</style>