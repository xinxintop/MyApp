// 引入mysql模块
const mysql=require('mysql')
//创建连接池
const pool=mysql.createPool({
    user:'root',
    password:'123456',
    database:'Ols',
    port:3306,
    host:'127.0.0.1',
    multipleStatements:true,
    connectionLimit:20

})

// 暴露pool对象
module.exports= pool
