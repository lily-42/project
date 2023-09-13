import SvgIcon from './SvgIcon/index.vue'
const allGlobalComponent = { SvgIcon }
// 引入element-plus提供全部图标组件
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

export default {
  install(app) {
    Object.keys(allGlobalComponent).forEach((key) => {
      app.component(key, allGlobalComponent[key])
    })
    // 将elementplus icon注册为全局组件
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  },
}
