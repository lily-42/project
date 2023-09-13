<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <div class="layout-sider">
      <Logo />
      <!-- 展示菜单 -->
      <el-scrollbar>
        <el-menu background-color="#001529" text-color="#ffffff" :default-active="$route.path">
          <Menu :menuList="useStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 顶部导航 -->
    <div class="layout-tabbar">导航</div>
    <!-- 内容展示区域 -->
    <div class="layout-main">
      <Main />
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRoute } from "vue-router";
import Logo from "./logo/index.vue";
import Menu from "./menu/index.vue";
import Main from "./main/index.vue";
import useUserStore from "@/store/modules/user";
let useStore = useUserStore();
// 获取路由器对象
let $route = useRoute();

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
    .el-scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout-tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
  }
  .layout-main {
    position: absolute;
    left: $base-menu-width;
    top: $base-tabbar-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    padding: 20px;
    overflow: auto;
  }
}
</style>
