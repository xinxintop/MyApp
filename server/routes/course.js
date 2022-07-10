//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')

//添加课程的路由
// http://127.0.0.1:8080/v1/course/add

route.post('/add',(req,res,next)=>{
   let course=req.body
  
   sql='insert into ol_course set ?'
   pool.query(sql,[course],(err,r)=>{
    if(err){return next(err)}
    if(r.affectedRows>0){
        res.send({code:200,msg:'添加成功'})
    }else{
        res.send({code:201,msg:'添加失败'})
    }
   })
 
})
// 删除课程的路由
// http://127.0.0.1:8080/v1/course/del
route.delete('/del',(req,res,next)=>{
    let obj=req.query
    let cour_id=parseInt(obj.cour_id)
    
    let sql=`delete from ol_course where cour_id=?`
    pool.query(sql,[cour_id],(err,r)=>{
        if(err){
            return next(err)
        }
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
})

// 课程修改路由
// http://127.0.0.1:8080/v1/course/upd
route.put('/upd',(req,res,next)=>{
    let obj=req.body
    let cour_id=parseInt(obj.cour_id)
    let sql=`update ol_course set ? where cour_id=?`
    pool.query(sql,[obj,cour_id],(err,r)=>{
        if(err){
            return next(err)
        }
        if(r.affectedRows>0){
            res.send({code:200,msg:'修改完成'})
        }else{
            res.send({code:201,msg:'修改失败'})
        }
    })
})

// 课程查询路由
// http://127.0.0.1:8080/v1/course/showALL
route.get('/showALL',(req,res,next)=>{
    let sql=`select cour_id ,cour_name,content,cote_id,state from ol_course`
    pool.query(sql,(err,r)=>{
        if(err){
            return next(err)}
       
        if(r.length>0) {
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})

// 按照id值查询路由
http://127.0.0.1:8080/v1/course/showByID?cour_id=1
route.get('/showByID',(req,res,next)=>{
    let cour_id=req.query.cour_id
    let sql=`select cour_name,cote_id,content,state from ol_course where cour_id=?`
    pool.query(sql,[cour_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send(r)
        }else{
            res.send({code:200,msg:'查询失败'})
        }
    })
})

module.exports=route