// 小仓库：layout组件相关配置仓库
import { defineStore } from 'pinia';

let useLayoutSettingStore = defineStore('SettingStore', {
    state:() => {
        return {
            fold: false, //用户菜单是否收起
        }
    }
})

export default useLayoutSettingStore;