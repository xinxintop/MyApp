#设置编码
set names  utf8;
#丢弃数据库如果OLS存在的话
drop database if exists OLS;
#创建数据库
create database OLS charset=utf8;
#使用数据库
use OLS;

create table ol_user  (
oid int primary key auto_increment,  #编号
oname  varchar(32),                  #用户名
ogender int ,                        #性别，0代表女，1代表男
upwd  VARCHAR(32),                   #密码
email VARCHAR(64),                   #邮箱
phone VARCHAR(16),             #手机号
touxiang VARCHAR(128),        #头像图片路径
real_name VARCHAR(32) ,      #用户名，如王小明
is_admin int                #是否为管理员
);

insert into ol_user values(null,'会飞的蜗牛',0,'123456','201@qq.com','13781103991','/','王晓萌',1);
insert into ol_user values(null,'唐三彩',1,'abc123','201011@qq.com','17833992333','/user','晓宇',1);

create table course();


