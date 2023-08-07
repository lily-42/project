import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import App from './App.vue'
// 引入全局样式
import '@/styles/index.scss'
// svg插件配置
import 'virtual:svg-icons-register'
// 引入自定义全局组件
import globalComponent from '@/components'
// 引入路由
import router from './router'
// 引入仓库
import pinia from './store'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})
app.use(globalComponent)
app.use(router)
app.use(pinia)
app.mount('#app')
