// server.js
const Koa = require('koa')
const app = new Koa()
const path = require('path')
const fs = require('fs')
const Router = require('koa-router')
const send = require('koa-send')
const router = new Router()
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json')
const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync('./index.ssr.html', 'utf-8'),
  clientManifest
})
function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      err ? reject(err) : resolve(html); // html 将是注入应用程序内容的完整页面
    });
  });
}
/* gzip压缩配置 start */
const compress = require('koa-compress');
const options = { 
    threshold: 1024 //数据超过1kb时压缩
};
app.use(compress(options));
/* gzip压缩配置 end */

router.get('*', async (ctx, next) => {
  // console.log("地址",ctx.path)
  const url = ctx.path;
  if(url.includes('.')){
    console.log(`proxy ${url}`)
    return await send(ctx, url, {root: path.resolve(__dirname,'./dist/client')})
  }
  const context = { // vue-ssr/src/server.js用到
    url: url
}
  ctx.res.setHeader("Content-Type", "text/html");
  // 将 context 数据渲染为 HTML
  const html = await renderToString(context);
  ctx.body = html;
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(1100,()=>{
  console.log('http://localhost:1100  koa服务端渲染')
})