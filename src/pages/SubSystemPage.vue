<script lang="ts">
import {defineComponent} from "vue";
import {getSystems, SubSystem} from "../common/sub_system";
import Layout from "../components/Layout.vue";

export default defineComponent({
  props: {},
  components: {Layout},
  setup(props, ctx) {

    return {
      ...getSystems()
    };
  },
  name: "SubSystemPage"
});
</script>

<template>

  <layout :show-menu=false :loading="subSystemData.loading" :error="subSystemData.error">
    <template #top-left>liteMan</template>
    <template #top-main>
      <div style="display: flex;flex: 1">
        <div style="flex: 1"></div>
        <el-menu style="border-bottom:none;" mode="horizontal">
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">我的</el-menu-item>
        </el-menu>
      </div>

    </template>
    <el-container>
      <el-main>
        <el-row style="min-height: 200px;"
                justify="center">
          <div v-for="(o, index) in subSystemData.systems" :key="o.code" style="padding: 14px;width: 164px;">
            <el-card shadow="hover" body-style="padding:0px;cursor: pointer;text-align: center;"
                     v-on:click=toMod(o)>
              <el-image
                  style="width: 100px; height: 100px;padding: 10px 10px 6px 10px;"
                  src="{{ o.icon }}" fit="fit"></el-image>
              <div style="font-size: 12px;padding: 0 10px 10px 10px;">{{ o.name }}</div>
            </el-card>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </layout>
</template>
<style scoped>

</style>