const express=require('express')

const router=express.Router()

const pool=require('../pool')


// 根据课程id添加图片操作
// http://127.0.0.1:8080/v1/courseimg/add
router.post('/add',(req,res,next)=>{
    let obj=req.body
    let sql='insert into ol_cour_img set ?'
    pool.query(sql,[obj],(err,r)=>{
        if(err){ return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:201,msg:'添加失败'})
        }
    })
    
})

// 根据课程id查询图片操作
// http://127.0.0.1:8080/v1/courseimg/selid
router.get('/selid',(req,res,next)=>{
    let cour_id=req.query.cour_id
    let sql='select img_url from ol_cour_img  where cour_id=?'
    pool.query(sql,[cour_id],(err,r)=>{
        if(err){ return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})


// 根据课程id删除图片操作
// http://127.0.0.1:8080/v1/courseimg/delbyid
router.delete('/delbyid',(req,res,next)=>{
    let cour_id=req.query.cour_id
    let sql='delete from ol_cour_img  where cour_id=?'
    pool.query(sql,[cour_id],(err,r)=>{
        if(err){ return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
})






module.exports=router