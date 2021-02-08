<script lang="ts">
import {defineComponent} from "vue";
import {getSystems, SubSystem} from "../common/sub_system";

export default defineComponent({
  props: {},
  setup(props, ctx) {

    return {
      ...getSystems()
    };
  },
  name: "SubSystemPage"
});
</script>

<template>

  <layout :loading="subSystemData.loading" :error="subSystemData.error">
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

  <!--  <el-container>-->
  <!--    <el-header style="line-height: 60px;font-size: 40px;font-weight: bold">LiteBos</el-header>-->
  <!--    <el-container>-->
  <!--      <el-main>-->
  <!--        <el-row v-loading="data.loading" style="min-height: 200px;"-->
  <!--                element-loading-text="拼命加载中"-->
  <!--                justify="center">-->
  <!--          <div v-for="(o, index) in data.list" :key="o.id" style="padding: 14px;width: 164px;">-->
  <!--            <el-card shadow="hover" body-style="padding:0px;cursor: pointer;text-align: center;"-->
  <!--                     v-on:click=toCategory(o)>-->
  <!--              <el-image-->
  <!--                  style="width: 100px; height: 100px;padding: 10px 10px 6px 10px;"-->
  <!--                  src="" fit="fit"></el-image>-->
  <!--              <div style="font-size: 12px;padding: 0 10px 10px 10px;">{{ o.name }}</div>-->
  <!--            </el-card>-->
  <!--          </div>-->
  <!--          <el-alert-->
  <!--              v-if="data.err!=null&&data.err!==''" :title="data.err"-->
  <!--              type="error"-->
  <!--              :closable="false"-->
  <!--              effect="dark">-->
  <!--          </el-alert>-->
  <!--        </el-row>-->
  <!--      </el-main>-->
  <!--    </el-container>-->
  <!--    <el-footer>@jicg</el-footer>-->
  <!--  </el-container>-->
</template>
<style scoped>

</style>