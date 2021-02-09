<script lang="ts">
import {defineComponent} from "vue";
import {getTable} from "../common/table";

export default defineComponent({
  props: {},
  setup(props, ctx) {
    return {...getTable()};
  },
  name: "TablePage"
});
</script>

<template>
</template>
<style scoped>

</style>