//客户端打包入口文件
import {createApp} from './main'
const {app,router} = createApp();
//路由完成之后，再去进行挂载，以防有异步路由的情况
router.onReady(()=>{
    app.$mount("#app");
})
