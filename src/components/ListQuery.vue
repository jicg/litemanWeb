<script lang="ts">
import {defineComponent, onMounted, PropType, ref, toRaw, watch} from "vue";
import {ListQuery, QueryType, shortcuts} from "../common/comp_list";
import TextTooltip from "./TextTooltip.vue";
import {SetupContext} from "@vue/runtime-core";

interface ListQueryProps {
  qs: ListQuery[]
}

function getListQuery(props: ListQueryProps, ctx: SetupContext) {
  let form = ref({});
  const onQuery = () => {
    ctx.emit("query", toRaw(form.value));
  }
  watch(props, props => {
    let qs = props.qs;
    for (let i = 0; i < qs.length; i++) {
      let q = qs[i];
      if (q.optionDef) {
        form.value[q.name] = q.optionDef;
      }
    }
  });
  return {form, QueryType, shortcuts, onQuery};
}

export default defineComponent({
  components: {TextTooltip},
  props: {
    qs: {
      type: Array as PropType<Array<ListQuery>>,
      required: true,
    },
  },
  emits: ["query"],
  setup(props, ctx) {
    return {...getListQuery(props, ctx)};
  },
  name: "ListQuery",
});
</script>

<template>
  <el-form :inline="true" size="mini" label-width="80px">
    <el-form-item ref="root" v-for="query in qs">
      <template #label>
        <text-tooltip :content="query.label">{{ query.label }}</text-tooltip>
      </template>
      <el-input v-if="query.type===QueryType.Str" v-model="form[query.name]"></el-input>
      <el-select v-if="query.type===QueryType.Select" v-model="form[query.name]" :data-value="query.optionDef">
        <el-option v-for="(op,_) in query.options" :label="op.label"
                   :value="op.value"></el-option>
      </el-select>
      <el-date-picker
          v-if="query.type===QueryType.Date"
          v-model="form[query.name]"
          style="width: 220px;"
          type="daterange"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :shortcuts="shortcuts"
      />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onQuery">查询</el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped>
/*.el-input .el-input--mini{*/
/*  width: 220px;*/
/*}*/
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item {
  margin-bottom: 12px;
}

</style>