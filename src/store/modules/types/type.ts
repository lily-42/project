import type { RouteRecordRaw } from "vue-router"
// 小仓库state类型
export interface Userstate {
  token: string | null,
  menuRoutes: RouteRecordRaw[]
}
