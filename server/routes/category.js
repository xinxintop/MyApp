//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')

//添加课程分类的路由
// http://127.0.0.1:8080/v1/category/add

route.post('/add',(req,res,next)=>{
    let category=req.body
   
    sql='insert into ol_cotegory set ?'
    pool.query(sql,[category],(err,r)=>{
     if(err){return next(err)}
     if(r.affectedRows>0){
         res.send({code:200,msg:'添加成功'})
     }else{
         res.send({code:201,msg:'添加失败'})
     }
    })
  
 })
//删除课程分类的路由
// http://127.0.0.1:8080/v1/category/del
 route.delete('/del',(req,res,next)=>{
     let obj=req.query
     let cote_id=parseInt(obj.cote_id)
     
     let sql=`delete from ol_cotegory where cote_id=?`
     pool.query(sql,[cote_id],(err,r)=>{
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
 
 // 
//修改课程分类的路由
// http://127.0.0.1:8080/v1/category/upd
 route.put('/upd',(req,res,next)=>{
     let obj=req.body
     let cote_id=parseInt(obj.cote_id)
     let sql=`update ol_cotegory set ? where cote_id=?`
     pool.query(sql,[obj,cote_id],(err,r)=>{
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
 
 // 课程分类查询路由
 // http://127.0.0.1:8080/v1/category/showALL
 route.get('/showALL',(req,res,next)=>{
     let sql=`select cote_id ,cote_name from ol_cotegory`
     pool.query(sql,(err,r)=>{
         if(err){
             return next(err)}
        
         if(r.length>0) {
             res.send({code:200,data:r})
         }else{
             res.send({code:201,msg:'查询失败'})
         }
     })
 })
 


module.exports=route