<script lang="ts">
import {defineComponent, toRaw, shallowReactive, computed, ref} from "vue";
import {getLogin} from "./login";

export default defineComponent({
  props: {},
  setup(props, ctx) {
    return {
      ... getLogin(props,ctx)
    }
  },
  name: "LoginPage"
});
</script>

<template>

  <el-card style="width: 400px;text-align: center;margin-left: -200px;left:50%;position: absolute;top: 20%">
    <template #header> 登陆</template>
    <el-form label-width="80px" ref="form" :model="user" :rules="rules">
      <el-form-item label="用户名:" prop="name">
        <el-input v-model="user.name" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="pwd">
        <el-input type="password" v-model="user.pwd" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item style="text-align: start;">
        <el-button type="primary" @click="submitForm">登陆</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>