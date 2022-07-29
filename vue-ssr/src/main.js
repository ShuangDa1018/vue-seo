import Vue from 'vue'
import router from './router'
import App from './App.vue'
 Vue.config.productionTip = false

// 实例 每次请求都会创建新的实例 
// 这与每个用户在自己的浏览器中使用新应用程序的实例类似。如果我们在多个请求之间使用一个共享的实例，很容易导致交叉请求状态污染 (cross-request state pollution)。

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
