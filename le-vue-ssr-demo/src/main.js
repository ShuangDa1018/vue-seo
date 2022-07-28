import Vue from 'vue'
import router from './router'
import App from './App.vue'
 Vue.config.productionTip = false

// 实例 每次请求都会创建新的实例
export const createApp = (context) => {
  const app = new Vue({
    router,
    context,
    render:h => h(App)
  })
  return { router, app }
}

// const originalPush = router.prototype.push
// router.prototype.push = function push(location) {
//     return originalPush.call(this, location).catch(err => err)
// }
