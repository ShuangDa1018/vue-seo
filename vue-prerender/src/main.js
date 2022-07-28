import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MetaInfo from 'vue-meta-info'

Vue.use(MetaInfo)

new Vue({
  router,
  render: (h) => h(App),
  // 添加mounted，不然不会执行预编译
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  },
}).$mount('#app')
