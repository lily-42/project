<template>
  <!-- logo -->
  <div class="logo">
    <img src="../../../public/logo.png" alt="" />
  </div>
  <!-- 菜单导航栏 -->
  <div class="tabbar-menu">
    <el-menu class="el-menu-demo" mode="horizontal" ellipsis>
      <el-menu-item index="1">首页</el-menu-item>
      <el-menu-item index="3">我要发布</el-menu-item>
      <el-menu-item index="4">课程中心</el-menu-item>
      <el-menu-item index="5">资讯中心</el-menu-item>
      <el-menu-item index="6">自定义一</el-menu-item>
      <el-menu-item index="7">自定义二</el-menu-item>
      <el-menu-item index="8">管理中心</el-menu-item>
    </el-menu>
  </div>
  <div class="tabbar-right">
    <!-- 签到 -->
    <div class="signIn">
      <el-button color="#ff6400" circle>签</el-button>
    </div>
    <!-- 搜索框 -->
    <div class="search-input">
      <el-input class="w-50 m-2" placeholder="搜索课程" :suffix-icon="Search" />
    </div>
    <!-- 帮助中心 -->
    <el-badge class="help-center item" is-dot>帮助中心</el-badge>
    <!-- 个人信息 -->
    <div class="info">
      <div class="name"><span>章月...</span></div>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon class="el-icon--right" size="18">
            <arrow-down />
          </el-icon>
        </span>
      </el-dropdown>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.logo {
  margin: 0 25px 0 34px;
  width: 118px;
  height: 50px;
  img {
    width: 100%;
  }
}
.tabbar-menu {
  display: flex;
  width: 40%;
  .el-menu {
    width: 100%;
    .el-menu-item {
      padding: 0 25px;
      font-weight: 600;
    }
  }
  .el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    background-color: #ffffff;
    border-bottom: none;
  }
}
.tabbar-right {
  position: absolute;
  right: 0;
  width: 30%;
  display: flex;
  align-items: center;
  .signIn {
    width: 36px;
    height: 36px;
    margin-right: 3%;

    .el-button {
      width: 100%;
      height: 100%;
      color: #ffffff;
      font-weight: 600;
    }
  }
  .search-input {
    width: 180px;
    height: 36px;
    margin-right: 22%;
  }
  .help-center {
    white-space: nowrap;
  }
  .info {
    display: flex;
    align-items: center;
    margin-left: 5%;
    margin-right: 7%;
    .name {
      width: 54px;
      height: 54px;
      border-radius: 27px;
      background-color: #1192ff;
      line-height: 54px;
      text-align: center;
      span {
        color: #ffffff;
      }
    }
  }
}
</style>
