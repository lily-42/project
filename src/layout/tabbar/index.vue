<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <Breadcrumb />
    </div>
    <div class="tabbar-right">
      <Setting />
    </div>
  </div>
</template>
<script setup lang="ts">
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './setting/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style scoped lang="scss">
.tabbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 10px;
  background-image: linear-gradient(
    to right,
    rgb(216, 204, 204),
    rgb(56, 52, 52),
    rgb(247, 232, 232)
  );
  .tabbar-left {
    display: flex;
    align-items: center;
  }
  .tabbar-right {
    display: flex;
    align-items: center;
  }
}
</style>
