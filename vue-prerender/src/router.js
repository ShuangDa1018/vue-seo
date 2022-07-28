/*
 * @Author: 余畅畅
 * @Date: 2021-05-07 10:33:37
 * @LastEditTime: 2021-05-07 11:22:39
 * @LastEditors: 余畅畅
 * @Description:
 * @FilePath: \new-projects\demo1\src\router.js
 *
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from './components/HelloWorld'
import A from './components/A'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    { path: '/A', name: 'A', component: A },
  ],
})
