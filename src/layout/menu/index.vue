<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由 -->
    <template v-if="!item.children">
      <el-menu-item
        v-if="!item.meta.hidden"
        :index="item.path"
        @click="goRoute"
      >
        {{ item.meta.title }}
      </el-menu-item>
    </template>
    <!-- 有一个子路由 -->
    <template v-if="item.children && item.children.length === 1">
      <el-menu-item
        v-if="!item.children[0].meta.hidden"
        :index="item.children[0].path"
        @click="goRoute"
      >
        {{ item.children[0].meta.title }}
      </el-menu-item>
    </template>
    <!-- 有多个子路由 -->
    <el-sub-menu
      v-if="item.children && item.children.length > 1"
      :index="item.path"
      popper-class="submenu-popper"
      :popper-offset="6"
      @click="goRoute"
    >
      <template #title>
        <div>{{ item.meta.title }}</div>
      </template>
      <Menu :menuList="item.children"></Menu>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts" name="Menu">
import Menu from '@/layout/menu/index.vue'
defineProps(['menuList'])

import { useRouter } from 'vue-router'
let $router = useRouter()
const goRoute = (vc: any) => {
  $router.push(vc.index)
}
</script>

<style scoped lang="scss">
.is-opened::before {
  content: '\A';
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid blue;
  position: absolute;
}
</style>
