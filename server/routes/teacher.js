//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')

//根据用户添加教师的路由
// http://127.0.0.1:8080/v1/teacher/add

route.post('/add',(req,res,next)=>{
   let obj=req.body
  
   sql='insert into ol_teach set ?'
   pool.query(sql,[obj],(err,r)=>{
    if(err){return next(err)}
    if(r.affectedRows>0){
        res.send({code:200,msg:'添加成功'})
    }else{
        res.send({code:201,msg:'添加失败'})
    }
   })
 
})
// 根据id删除教师的路由
// http://127.0.0.1:8080/v1/teacher/del
route.delete('/del',(req,res,next)=>{
    let obj=req.query
    let ot_id=parseInt(obj.ot_id)
    
    let sql=`delete from ol_teach where ot_id=?`
    pool.query(sql,[ot_id],(err,r)=>{
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

// 学员信息修改路由
// http://127.0.0.1:8080/v1/teacher/upd
route.put('/upd',(req,res,next)=>{
    let obj=req.body
    let ot_id=parseInt(obj.ot_id)
    let sql=`update ol_teach set ? where ot_id=?`
    pool.query(sql,[obj,ot_id],(err,r)=>{
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

// 学员信息查询路由
// http://127.0.0.1:8080/v1/teacher/showALL
route.get('/showALL',(req,res,next)=>{
    let sql=`select ot_id,oid,introduce,expr,level from ol_teach`
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

// 学员信息id值查询路由
// http://127.0.0.1:8080/v1/teacher/showByID?ot_id=2
route.get('/showByID',(req,res,next)=>{
    let ot_id=req.query.ot_id
    let sql=`select ot_id,oid,introduce,expr,level  from ol_teach where ot_id=?`
    pool.query(sql,[ot_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:200,msg:'查询失败'})
        }
    })
})





module.exports=route