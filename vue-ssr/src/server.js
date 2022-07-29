//服务器端打包入口文件 仅运行于服务器
import { createApp } from './main'
//返回一个函数，接收请求上下文，返回创建的vue实例
//根据返回的内容，拿到指定的路由节点
export default context => {
    //这里返回一个Promise，确保路由会组件准备就绪
    return new Promise((resolve, reject) => {
        const { app, router } = createApp(context);
        //跳转到首屏地址
        router.push(context.url);
        //路由就绪，返回结果
        router.onReady(() => {
            // 访问路径，可定匹配到组件
            let matchedCompoents = router.getMatchedComponents();
 
            if (!matchedCompoents.length) {
                return reject({ code: 404 })
            }
            resolve(app)
        }, reject);
    })
}
