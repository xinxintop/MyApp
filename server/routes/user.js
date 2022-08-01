//引入express模块
const { Router } = require('express')
const express=require('express')
// 引入路由模块
const route=express.Router()
//引入pool模块
const pool=require('../pool')



// 用户注册路由
//测试接口 http://127.0.0.1:8080/v1/user/reg
route.post('/reg',(req,res,next)=>{
  let obj=req.body
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


//用户的登录路由
//测试接口 http://127.0.0.1:8080/v1/user/login
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
  pool.query('select oname, upwd  from ol_user where oname=? ',[obj.oname,obj.role],(err,r)=>{
    if(err){
      return next(err)
    }
    if(r.length>0){
        
        if(r[0].upwd==obj.upwd){
          res.send({code:200,msg:'登录成功'})
      
        }else{
          res.send({code:203,msg:'你的密码有误'})
        }
    }else{
      res.send({code:503,msg:'您的用户名不存在或有误'})
    }
  })
})






//用户的删除路由
//测试接口 http://127.0.0.1:8080/v1/user/del/1
route.delete('/del/:oid',(req,res,next)=>{
  var oid=req.params.oid

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
// 用户修改
//// 测试接口： http://127.0.0.1:8080/v1/user/update
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



// 用户查询部分

//查询用户所有用户
// 测试接口： http://127.0.0.1:8080/v1/user/showAll
route.get('/showAll',(req,res,next)=>{
  let sql='select oid, oname,ogender ,email,phone,role from ol_user'
  pool.query(sql,(err,r)=>{
    if(err){return next(err)}
    if(r.length>0){
      res.send(r)
    }else{
      res.send({code :201,msg:'查询失败'})
    }
  })

})

//通过用户名查询用户
//测试接口 http://127.0.0.1:8080/v1/user/selByName
route.get('/selByName',(req,res,next)=>{
  var obj=req.query;
  pool.query('select oid, oname,ogender ,email,phone,role from ol_user where oname=?',[obj.oname],(err,r)=>{
    if(err){
      return next(err);
    }
    if(r.length>0){
      res.send({code:200,msg:'查询成功',data:r})
    } else{
      res.send({code:201,msg:'查询失败'})
    }
  })
})


//通过di查询用户
// 测试接口：http://127.0.0.1:8080/v1/user/selbyid?oid=4
route.get('/selbyid',(req,res,next)=>{
  let oid=parseInt(req.query.oid);
  let sql='select * from ol_user where oid=?'
  pool.query(sql,[oid],(err,r)=>{
    if(err){ return next(err)}
   
    if(r.length>0){
      res.send({code:200,msg:'查询成功',data:r})
    }else{
      res.send({code:201,msg:'查询失败'})
    }
  })
})

// 按照身份查询用户 0管理员，1讲师，2学生
//测试接口 http://127.0.0.1:8080/v1/user/selbyRole
route.get('/selbyRole',(req,res,next)=>{
    let role=req.query.role;
    let sql='select oid, oname,ogender ,email,phone,role from ol_user where role=? '
    pool.query(sql,[role],(err,r)=>{
      if(err){return next(err)}
      if(r.length>0){
        res.send({code:200,msg:'查询成功',d:r})
      }else{
        res.send({code:201,msg:'查询失败'})
      }
    })
})
module.exports=route
