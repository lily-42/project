import axios from 'axios'
let request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
})

// 请求拦截
request.interceptors.request.use((config) => {
  return config
})

// 响应拦截
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {},
)

export default request
