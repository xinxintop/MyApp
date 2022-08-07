//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')

/* 
pool.query(sql,[],(err,r)=>{
    if(err){return next(err)}
    if(r.affectedRows>0){
        res.send({code:200,msg:''})
    }else{
        res.send({code:201,msg:''})
    }
}) 

pool.query(sql,[],(err,r)=>{
    if(err){return next(err)}
    if(r.length>0){
        res.send({code:200,msg:''})
    }else{
        res.send({code:201,msg:''})
    }
}) 




*/


// 根据学员和课程id添加学员课程表
// http://127.0.0.1:8080/v1/stu_cour/add
route.post('/add',(req,res,next)=>{
    let obj=req.body
    let sql='insert into ol_stu_cour set ?'
    pool.query(sql,[obj],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:201,msg:'添加失败'})
        }
    })
})

// 根据id删除学员课程表
//  http://127.0.0.1:8080/v1/stu_cour/del
route.delete('/del',(req,res,next)=>{
    let os_id=req.query.os_id
    let sql='delete from ol_stu_cour where os_id= ?'
    pool.query(sql,[os_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
})

// 根据id修改学员课程表
//  http://127.0.0.1:8080/v1/stu_cour/update
route.put('/update',(req,res,next)=>{
    let obj=req.body
    let os_id=req.body.os_id
    
    let sql='update ol_stu_cour set ? where os_id= ?'
    pool.query(sql,[obj,os_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'修改成功'})
        }else{
            res.send({code:201,msg:'修改失败'})
        }
    })
})


// 根据id查询学员课程表
//  http://127.0.0.1:8080/v1/stu_cour/selbyid?os_id=3
route.get('/selbyid',(req,res,next)=>{
    let os_id=req.query.os_id
    let sql='select * from ol_stu_cour where os_id= ?'
    pool.query(sql,[os_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})

// 查询所有学员课程
//  http://127.0.0.1:8080/v1/stu_cour/selAll
route.get('/selAll',(req,res,next)=>{
    let sql='select * from ol_stu_cour'
    pool.query(sql,(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})







module.exports=route


