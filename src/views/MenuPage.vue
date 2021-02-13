<script lang="ts">
import {defineComponent} from "vue";
import {getMenu} from "../common/home";
import TablePage from "./TablePage.vue";
import SimpleLayout from "../components/SimpleLayout.vue";

export default defineComponent({
  props: {},
  components: {TablePage, SimpleLayout},
  setup(props, ctx) {
    return {...getMenu()};
  },
  name: "MenuPage"
});
</script>

<template>
  <simple-layout :loading="menuData.loading" :error="menuData.error">
    <table-page :table-code="menuData.menu.tableCode" v-if="menuData.menu.tableCode"/>
    <iframe :src="menuData.menu.uri" v-else></iframe>
  </simple-layout>
</template>
<style scoped>

</style>