<script lang="ts">
import {defineComponent, ref} from "vue";
import Layout from "../components/Layout.vue";
import {getMenus, loadParam} from "../common/home";
import HamBurger from "../components/HamBurger.vue";

export default defineComponent({
  name: "HomePage",
  components: {HamBurger, Layout},
  setup() {
    const isCollapse = ref(false)
    return {
      isCollapse,
      ...getMenus()
    }
  },
});
</script>

<template>
  <layout :loading="menusData.loading" :error="menusData.error" v-model:collapse="isCollapse">
    <template #top-left>liteMan</template>
    <template #top-main>
      <div style="display: flex;flex: 1">
        <div style="flex: 1"></div>
        <el-menu style="border-bottom:none;" mode="horizontal" @select="handleSelect">
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4">我的</el-menu-item>
        </el-menu>
      </div>

    </template>
    <template #main-left>
      <el-menu size="mini" class="el-menu-vertical-demo" style="border-right:none" @open="handleOpen"
               @close="handleClose" :default-active="$route.params['menuCode']" @select=handleSelectMenu
               :collapse="isCollapse">
        <template :key="m.code" v-for="m in menusData.menus">
          <el-submenu v-if="m.childList.length>0" :index="m.code" popper-class="el-submenu-popper">
            <template #title>
              <i :class="m.icon?m.icon:'el-icon-menu'"></i>
              <span>{{ m.name }}</span>
            </template>
            <el-menu-item :key="ms.code" :index="ms.code" v-for="ms in m.childList">
              <i :class="ms.icon?ms.icon:'el-icon-document'"></i>
              <template #title>{{ ms.name }}</template>
            </el-menu-item>
          </el-submenu>
          <el-menu-item :index="m.code" v-else>
            <i :class="m.icon?m.icon:'el-icon-document'"></i>
            <template #title><span>{{ m.name }}</span></template>
          </el-menu-item>
        </template>
      </el-menu>
    </template>

    <router-view :key="$route.path"/>
  </layout>
</template>
<style>
.el-submenu-popper {
  max-height: 80%;
  overflow: auto;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)

}
.el-submenu-popper::-webkit-scrollbar {
  display: none;
}
</style>