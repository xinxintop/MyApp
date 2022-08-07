 var express=require('express')

 var route=new express.Router()

 var pool=require('../pool')
 
//  为课程添加大阶段
// http://127.0.0.1:8080/v1/stage/addbigByid
 route.post('/addbigByid',(req,res,next)=>{
    let obj=req.body
    let sql=`insert into ol_stage set sta_id=?, ? `
    pool.query(sql,[null,obj],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:201,msg:'添加失败'})
        }
    })

 })


//  根据大阶段id添加小阶段
// http://127.0.0.1:8080/v1/stage/smaaddbyId
route.post('/smaaddbyId',(req,res,next)=>{
    let obj=req.body
    let sql=`insert into ol_smstage set sms_id=?, ? `
    pool.query(sql,[null,obj],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'添加成功'})
        }else{
            res.send({code:201,msg:'添加失败'})
        }
    })

 })


// 根据id修改大阶段
// http://127.0.0.1:8080/v1/stage/staupdate
route.put('/staupdate',(req,res,next)=>{
    let obj=req.body
    let sta_id=parseInt(obj.sta_id)
    let sql=`update ol_stage set ? where sta_id=?`
    pool.query(sql,[obj,sta_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'修改成功'})
        }else{
            res.send({code:201,msg:'修改失败'})
        }
    })
})

// 根据id修改小阶段
// http://127.0.0.1:8080/v1/stage/smalupdate
route.put('/smalupdate',(req,res,next)=>{
    let obj=req.body
    let sms_id=parseInt(obj.sms_id)
    let sql=`update ol_smstage set ? where sms_id=?`
    pool.query(sql,[obj,sms_id],(err,r)=>{
        if(err){return next(err)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'修改成功'})
        }else{
            res.send({code:201,msg:'修改失败'})
        }
    })
})

//根据课程id查询大阶段，根据大阶段id查询小阶段
route.get('/selsByCourid',(req,res,next)=>{
    let cour_id=req.query.cour_id
    let sql1=`select sta_id,sta_name,cour_id from ol_stage where cour_id=?; select sms_id,sms_name,sms_file from ol_smstage where sta_id= any (select sta_id from ol_stage where cour_id=?);`
   
    pool.query(sql1,[cour_id,cour_id],(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            res.send({code:201,msg:'查询失败'})
        }
    })
})

//根据id删除大阶段
// http://127.0.0.1:8080/v1/stage/delBig
route.delete('/delBig',(req,res,next)=>{
    let sta_id=req.query.sta_id
    let sql=`DELETE from ol_stage where sta_id=?;`
    pool.query(sql,[sta_id],(error,r)=>{
        if(error){return next(error)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
})

//根据id删除小阶段

route.delete('/delsma',(req,res,next)=>{
    let sms_id=req.query.sms_id
    let sql=`delete from  ol_smstage where sms_id=?`
    pool.query(sql,[sms_id],(error,r)=>{
        if(error){return next(error)}
        if(r.affectedRows>0){
            res.send({code:200,msg:'删除成功'})
        }else{
            res.send({code:201,msg:'删除失败'})
        }
    })
    

})

module.exports=route

