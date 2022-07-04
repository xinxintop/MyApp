//引入express模块
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')
//用户的注册路由
route.post('/reg',(req,res,next)=>{

  var obj=req.body;

  if(!obj.oname){
    res.send({code:501,msg:'用户名不能为空'})
    return
  }
  if(!obj.upwd){
    res.send({code:502,msg:'密码不能为空'})
    return
  }
  pool.query('select oname from ol_user where oname=?',[obj.oname],(err,r)=>{
    if(err){
      return next(err);
    }
    if(r.length>0){
      res.send({code:300,msg:'用户名已存在'})
      return
    } 
    pool.query('insert into ol_user set oid=?,?',[null,obj],(err,r)=>{
    if (err){
      //如果SQL发生错误，交给下一个错误处理中间件
      next(err)
      return; //阻止往后执行
  }
    if(r.affectedRows>0){
       res.send({code:200,msg:'注册成功'})
    }else{
      res.send({code:500,msg:'注册失败'})
    }
  })
  })
 
 
})
//用户的登录路由
route.post('/login',(req,res,next)=>{
  var obj=req.body
  if(!obj.oname){
    res.send({code:502,msg:'用户名不能为空'})
    return
  }
  if(!obj.upwd){
    res.send({code:501,msg:"密码不能为空"})
    return
  }
  pool.query('select oname,upwd  from ol_user where oname=?',[obj.oname],(err,r)=>{
    if(err){
      return next(err)
    }
    if(r.length>0){
      if(r[0].upwd===obj.upwd){
        res.send({code:200,msg:'登录成功'})
        return
      }else{
        res.send({code:404,msg:'登录失败，密码输入错误'})
      }
    }else{
      res.send({code:503,msg:'登录失败，用户名不存在或有误'})
    }
  })
})
//用户的删除路由
route.delete('/del/:oid',(req,res,next)=>{
  var oid=req.params.oid
  console.log(oid)
  pool.query('delete from ol_user where oid=?',[oid],(err,r)=>{
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
//用户的编辑路由
route.put('/update',(req,res,next)=>{
  var obj=req.body
  pool.query('update ol_user set ? where oid=?',[obj,obj.oid],(err,r)=>{
    if(err){
      return next(err)
    }
    if(r.affectedRows>0){
      res.send({code:200,msg:'修改成功'})
    }else{
      res.send({code:500,msg:'修改失败'})
    }
  })
})



module.exports=route
