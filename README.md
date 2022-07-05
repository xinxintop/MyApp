# OnlieClass

在线分享视频bolg介绍
  在线课堂是一款一线上课程为主的PC网站，为千万学生提供免费优质的课程，主要分为用户登录模块、用户注册、课程模块，搜索模块，收藏中心模块。用户可以搜索自己感兴趣的课程，加入自己的收藏中心，
数据库的设计：
  
用户表：ol_user
用户编号、用户名、性别、密码、邮箱、手机号、用户头像、用户真实名字、是否为管理员
讲师表：ol_tech
教师编号、用户编号、课程阶段、课程名称
课程表：ol_course
课程编号、课程名、课程成绩、用户编号、教师编号、课程状态
课程阶段表：ol_stage
阶段编号 阶段名称 课程编号
进度表：ol_days
编号、天数、进度名称、视频路径、阶段编号、 课程编号
用户收藏中心表：ol_collect
收藏编号 课程编号、用户编号


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