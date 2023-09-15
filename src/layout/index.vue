<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div
      class="layout-sider"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <Logo />
      <!-- 展示菜单 -->
      <el-scrollbar>
        <el-menu
          background-color="#001529"
          text-color="#ffffff"
          :default-active="$route.path"
          :collapse="LayoutSettingStore.fold ? true : false"
        >
          <Menu :menuList="useStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div
      class="layout-tabbar"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <Tabbar />
    </div>
    <!-- 内容展示区域 -->
    <div
      class="layout-main"
      :class="{ fold: LayoutSettingStore.fold ? true : false }"
    >
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'
import useUserStore from '@/store/modules/user'
import useLayoutSettingStore from '@/store/modules/setting'
let useStore = useUserStore()
let LayoutSettingStore = useLayoutSettingStore()
// 获取路由器对象
let $route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>
<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  .layout-sider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    color: #ffffff;
    transition: all 0.3s;
    .el-scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: 50px;
    }
  }
  .layout-tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout-main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fold {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
