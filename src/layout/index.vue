<template>
  <div class="layout_container">
    <!-- 顶部导航 -->
    <div class="layout_tabbar">
      <Tabbar></Tabbar>
    </div>
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <el-scrollbar class="scrollbar">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          collapse
          background-color="#222735"
          text-color="#ffffff"
        >
          <Menu :menuList="constantRoute"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 内容展示 -->
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import { constantRoute } from '@/router/routes.ts'

let $route = useRoute()
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
}
.layout_tabbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $base-tabbar-height;
  display: flex;
  align-items: center;
}
.layout_slider {
  position: absolute;
  left: 0;
  top: $base-tabbar-height;
  width: $base-menu-width;
  height: calc(100% - $base-tabbar-height);
  background-color: $base-menu-background;
  .scrollbar {
    .el-menu {
      width: 100%;
      height: 100%;
      border-right: none;
    }
  }
}
.layout_main {
  position: absolute;
  top: $base-tabbar-height;
  left: $base-menu-width;
  width: calc(100% - $base-menu-width);
  height: calc(100% - $base-tabbar-height);
  overflow: auto;
  padding: 20px;
  background-color: $base-main-background;
}
</style>
