
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import A from './components/A'

Vue.use(Router)
// router.js 中设置mode: “history”
// 预渲染的单页应用路由可以使用 history 模式或者 hash 模式。如果设置mode: ‘hash’，就要改一下预渲染的路由文件路径。

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/A', name: 'A', component: A },
  ],
})
