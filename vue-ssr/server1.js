// server.js
const path = require('path')
const fs = require('fs')
const express = require('express')
const { createBundleRenderer } = require('vue-server-renderer')
const serverBundle = require('./dist/server/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/client/vue-ssr-client-manifest.json')

const app = express()
// // app.set('port', 8001);
// // 静态文件目录指向dist文件夹
app.use(express.static(path.join(__dirname, './dist/client')))

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template: fs.readFileSync('./index.ssr.html', 'utf-8'),
  clientManifest
})

app.get('*', (req, res) => {
  // console.log("地址",req.url)
  // res.end(req.url)
  const context = {
    url: req.url
  }

  renderer.renderToString(context, (err, html) => {
    if (err) {
      if (err.code === 404) {
        res.status(404).end('404 not found')
      } else {
        res.status(500).end(err.message)
      }
    } else {
      res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'});
      // console.log("html",html)
      res.end(html)
    }
  })
})
app.listen(1001,()=>{
  console.log('http://localhost:1001 express服务端渲染')
})
/*服务启动*/
// http.createServer(app).listen(app.get('port'), function () {
//   console.log('service start at ' + app.get('port'));
// });