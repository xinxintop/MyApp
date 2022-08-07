//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')


// 根据讲师和课程id添加讲师课程表
// http://127.0.0.1:8080/v1/teach_cour/add
route.post('/add',(req,res,next)=>{
    let obj=req.body
    let sql='insert into ol_tech_course set ?'
    pool.query(sql,[obj],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:201,msg:'添加失败'})
        }
    })
})

// 根据id删除讲师课程表
//  http://127.0.0.1:8080/v1/teach_cour/del
route.delete('/del',(req,res,next)=>{
    let tc_id=req.query.tc_id
    let sql='delete from ol_tech_course where tc_id= ?'
    pool.query(sql,[tc_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
})

// 根据id修改讲师课程表
//  http://127.0.0.1:8080/v1/teach_cour/update
route.put('/update',(req,res,next)=>{
    let obj=req.body
    let tc_id=req.body.tc_id
    
    let sql='update ol_tech_course set ? where tc_id= ?'
    pool.query(sql,[obj,tc_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'修改成功'})
        }else{
            res.send({code:201,msg:'修改失败'})
        }
    })
})


// 根据id查询讲师课程表
//  http://127.0.0.1:8080/v1/teach_cour/selbyid?tc_id=3
route.get('/selbyid',(req,res,next)=>{
    let tc_id=req.query.tc_id
    let sql='select * from ol_tech_course where tc_id= ?'
    pool.query(sql,[tc_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})

// 查询所有讲师课程
//  http://127.0.0.1:8080/v1/teach_cour/selAll
route.get('/selAll',(req,res,next)=>{
    let sql='select * from ol_tech_course'
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