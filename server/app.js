//引入express模块
const express=require('express')
// 创建web服务器
const app=express()
// 引入用户模块
const user=require('./routes/user.js')
//设置端口
app.listen(6000,()=>{
    console.log('服务器已经启动')
})
// post转对象
app.use(express.urlencoded({
    extended:true
}))
// http://127.0.0.1:6000/v1/user/reg
app.use('/v1/user',user)

app.use((err,req,res,next)=>{
    //所接收到的路由传递的错误
    console.log(err)
    res.send({code:500,msg:'服务器端错误'})
})


