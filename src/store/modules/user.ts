// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 引入接口
import { reqLogin } from '@/api/user'
//引入类型
import type { loginForm, loginResponseData } from '@/api/user/type'
import type { Userstate } from './types/type'
import { GET_TOKEN, SET_TOKEN } from '@/utils/token'
// 引入常量路由
import { constantRoute } from '@/router/routes'

//创建用户小仓库
let useUserStore = defineStore('User', {
  // 小仓库存储数据地方
  state: (): Userstate => {
    return {
      token: GET_TOKEN(),
      menuRoutes: constantRoute,
    }
  },
  //异步/逻辑的地方
  actions: {
    //登录方法
    async userLogin(data: loginForm) {
      let result: loginResponseData = await reqLogin(data)
      if (result.code == 200) {
        this.token = result.data.token as string
        SET_TOKEN(result.data.token as string)
        return 'ok'
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})
// 对外暴露获取小仓库方法
export default useUserStore
