<script lang="ts">
import {defineComponent} from "vue";
import {getTable} from "../common/home";

export default defineComponent({
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
  TablePage {{ tableCode }}
</template>
<style scoped>

</style>