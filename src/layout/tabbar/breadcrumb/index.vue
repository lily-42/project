<template>
  <!-- 图标 -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!-- 面包屑 -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item :to="{ path: '/' }">权限</el-breadcrumb-item>
    <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useLayoutSettingStore from '@/store/modules/setting'
let LayoutSettingStore = useLayoutSettingStore()

const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}
</script>
<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style lang="less" scoped></style>
