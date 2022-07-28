const express  =require('express')
const path  = require('path')

const app = express()
let name  = 'vue-prerender'
app.use(express.static(path.join(__dirname,`./dist`)))
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,`./dist`,'index.html'))
})
app.post('/*',(req,res)=>{
    res.json(req.body)
})
app.listen(8888,()=>{
    console.log('http://localhost:8888/')
})