// 用户相关接口
import request from '@/utils/request'
import type { loginForm, loginResponseData } from './type'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

export const reqLogin = (data: loginForm) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)
export const reqUserInfo = () => request.get(API.USERINFO_URL)