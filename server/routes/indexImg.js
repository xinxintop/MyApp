const express=require('express')

const pool=require('../pool.js')

const route=express.Router()


// 根据sort查询轮播图
// http://127.0.0.1:8080/v1/indeximg/sel
route.get('/sel',(req,res,next)=>{
    let sql='select * from indeximg order by ol_sort asc '
    pool.query(sql,(err,r)=>{
        if(err){return next(err)}
        if(r.length>0){
            res.send({code:200,msg:'查询成功',data:r})
        }else{
            console.log({code:201,msg:'查询失败'})
        }
    })
     
})


//添加轮播图模块
//http://127.0.0.1:8080/v1/indeximg/add
route.post('/add',(req,res,next)=>{
  var obj=req.body
  let sql=`insert into indeximg set ? `
  pool.query(sql,[obj],(err,r)=>{
    if(err) return next(err)
   
    if(r.affectedRows>0){
      res.send({code:200,msg:'添加成功'})
    }else{
      res.send({code:201,msg:'添加失败'})
    }
  })
})

//删除轮播图模块
// http://127.0.0.1:8080/v1/indeximg/del?index_id=1
route.delete('/del',(req,res,next)=>{
    var id=req.query.index_id
    
    pool.query('delete from indeximg where index_id=?',[id],(err,r)=>{
      if(err){
        return next(err)
      }
      if(r.affectedRows>0){
        res.send({code:200,msg:'删除成功'})
      }else{
        res.send({code:500,msg:'删除失败'})
      }
    })
  })

module.exports=route