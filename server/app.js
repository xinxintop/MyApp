//引入express模块
const express=require('express')
// 创建web服务器
const app=express()

var cors= require('cors')
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

//用户拦截拦截中间件

app.use(cors())
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

// 课程阶段管理路由
const stage=require('./routes/stage')

app.use('/v1/stage',stage)

//课程图片管理路由
// http://127.0.0.1:8080/v1/courseimg/
const courseimg=require('./routes/corseImg')

app.use('/v1/courseimg',courseimg)


//讲师信息管理
// http://127.0.0.1:8080/v1/teacher/
const teacher=require('./routes/teacher')

app.use('/v1/teacher',teacher)

//学生课程路由
// http://127.0.0.1:8080/v1/stu_cour/
const stu_cour=require('./routes/stu_cour')

app.use('/v1/stu_cour',stu_cour)

//教师课程路由
// http://127.0.0.1:8080/v1/teach_cour/
const teach_cour=require('./routes/teach_cour')

app.use('/v1/teach_cour',teach_cour)



app.use((err,req,res,next)=>{
    //所接收到的路由传递的错误
    console.log(err)
    res.send({code:500,msg:'服务器端错误'})
})


