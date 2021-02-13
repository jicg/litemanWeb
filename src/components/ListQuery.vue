<script lang="ts">
import {defineComponent, PropType, ref, toRaw} from "vue";
import {ListQuery, QueryType} from "../common/comp_list";
import TextTooltip from "./TextTooltip.vue";


export default defineComponent({
  components: {TextTooltip},
  props: {
    qs: {
      type: Array as PropType<Array<ListQuery>>,
      default: [] as ListQuery[]
    }
  },
  emits: ["query"],
  setup(props, ctx) {
    let form = ref({});
    const onQuery = () => {
      ctx.emit("query", toRaw(form.value));
    };
    return {form, onQuery, QueryType};
  },
  name: "ListQuery",
});
</script>

<template>
  <el-form :inline="true" size="mini" label-width="120px">
    <el-form-item ref="root" v-for="query in qs">
      <template #label>
        <text-tooltip :content="query.label">{{ query.label }}</text-tooltip>
      </template>
      <el-input v-if="query.type===QueryType.Date" v-model="form[query.name]"></el-input>
      <el-input v-if="query.type===QueryType.Str" v-model="form[query.name]"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onQuery">查询</el-button>
    </el-form-item>
  </el-form>
</template>