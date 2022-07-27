//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')

//根据用户添加学员的路由
// http://127.0.0.1:8080/v1/student/add

route.post('/add',(req,res,next)=>{
   let stu=req.body
  
   sql='insert into ol_stu set ?'
   pool.query(sql,[stu],(err,r)=>{
    if(err){return next(err)}
    if(r.affectedRows>0){
        res.send({code:200,msg:'添加成功'})
    }else{
        res.send({code:201,msg:'添加失败'})
    }
   })
 
})
// 根据id删除学员的路由
// http://127.0.0.1:8080/v1/student/del
route.delete('/del',(req,res,next)=>{
    let obj=req.query
    let stu_id=parseInt(obj.cour_id)
    
    let sql=`delete from ol_stu where stu_id=?`
    pool.query(sql,[stu_id],(err,r)=>{
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
// http://127.0.0.1:8080/v1/student/upd
route.put('/upd',(req,res,next)=>{
    let obj=req.body
    let stu_id=parseInt(obj.stu_id)
    let sql=`update ol_stu set ? where stu_id=?`
    pool.query(sql,[obj,stu_id],(err,r)=>{
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
// http://127.0.0.1:8080/v1/student/showALL
route.get('/showALL',(req,res,next)=>{
    let sql=`select stu_id ,grade,oid,score from ol_stu`
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
http://127.0.0.1:8080/v1/student/showByID?cour_id=1
route.get('/showByID',(req,res,next)=>{
    let stu_id=req.query.stu_id
    let sql=`select stu_id ,grade,oid,score  from ol_stu where stu_id=?`
    pool.query(sql,[stu_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send(r)
        }else{
            res.send({code:200,msg:'查询失败'})
        }
    })
})





module.exports=route