//引入express模块
const express=require('express')
// 创建web服务器
const app=express()
// 引入用户模块
const user=require('./routes/user.js')
//设置端口
app.listen(8080,()=>{
    console.log('服务器已经启动')
})
// post转对象
app.use(express.urlencoded({
    extended:true
}))

app.use(express.static('./public'))

// 用户管理路由
// http://127.0.0.1:8080/v1/user/
app.use('/v1/user',user)
//课程管理路由
const course=require('./routes/course')
// http://127.0.0.1:8080/v1/course
app.use('/v1/course',course)

//轮播图管理的路由
const indeximg=require('./routes/indexImg')
// http://127.0.0.1:8080/v1/indeximg/
app.use('/v1/indeximg',indeximg)

//课程分类管理的路由
const category=require('./routes/category')
// http://127.0.0.1:8080/v1/indeximg/
app.use('/v1/category',category)

//学生信息管理的路由
const student=require('./routes/student')
// http://127.0.0.1:8080/v1/indeximg/
app.use('/v1/student',student)

app.use((err,req,res,next)=>{
    //所接收到的路由传递的错误
    console.log(err)
    res.send({code:500,msg:'服务器端错误'})
})


