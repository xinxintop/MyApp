# OnlieClass

在线课堂介绍
  在线课堂是一款一线上课程为主的PC网站，为千万学生提供免费优质的课程，主要分为用户登录模块、用户注册、课程模块，搜索模块，收藏中心模块。用户可以搜索自己感兴趣的课程，加入自己的收藏中心。
  分为教师端和学员端
  后台包括用户的增删给查、课程体系的增删改查、课程阶段的增删改查、学员信息的增删改查
数据库的设计：
  





#用户表
create table ol_user  (
oid int primary key auto_increment,  #编号
oname  varchar(32),                  #用户名
ogender int ,                        #性别，0代表女，1代表男
upwd  VARCHAR(32),                   #密码
email VARCHAR(64),                   #邮箱
phone VARCHAR(16),             #手机号
touxiang VARCHAR(128),        #头像图片路径
real_name VARCHAR(32) ,      #用户名，如王小明
is_admin int                #角色表：0管理员，1讲师，2学员
);

#首页轮播图表
create table indeximg(
index_id  int  PRIMARY key auto_increment,   #轮播图编号
index_url  varchar(32),                      #轮播图资源地址
cate_type  int,                              #轮播图分类  0 课程，1  课程分类
cour_id   int,                               #轮播图类型0时的课程id
cote_id    int                                #轮播图类型1 时的分类id
);




#课程分类表
create  table ol_cotegory(
  cote_id    int PRIMARY KEY auto_increment,  #分类编号
  cote_name  varchar(32)                      #分类名
);
#课程表
create table  ol_course (
  cour_id  int  primary key  auto_increment,  #课程编号
  cour_name  varchar(32),                     #课程名
  content   varchar(256),                     #课程内容（简介）
  cote_id   int ,                             #课程分类
  state      int                              #课程状态（上架）
  
);
#课程图片表
create table ol_cour_img(
  courimg_id   int primary key auto_increment, #图片id
  img_url     int
);

#讲师表：ol_tech
create  table ol_teach(
  ot_id  int primary key auto_increment,  #编号
  oid   int  ,                            #用户编号 
  introduce   varchar(128),                #讲师介绍
  expr varchar(32) ,                       #经验
  level int                               #讲课等级 0金牌、1银牌、2铜牌
  
);

#讲师课程表
create table ol_tech_course(
    tc_id   int  PRIMARY KEy auto_increment,  #编号
	ot_id   int,                              #讲师编号
	sta_id   int ,                          #课程阶段
	sms_id    int,                          #课程小阶段表
    cour_id   int                              #课程编号
  
);

#学员表：ol_stu
#编号 课程编号、用户编号         
create  table ol_stu(                                    
  stu_id  int  primary key  auto_increment,  #学员编号
  grade   varchar(32),                       #学员班级
  oid   int  ,                                #用户编号
  score  int                                 #学员成绩
  
);

#学员课程表：
create table ol_stu_cour(
 os_id  int PRIMARY KEY auto_increment,      #编号
 cour_id int  ,                               #课程编号
 sta_id  int,                               #学员所学阶段
 sms_id   int                                #学员所学小阶段
);



#课程阶段表：ol_stage
#阶段编号 阶段名称 课程编号
create table  ol_stage(
sta_id int primary key auto_increment,   #编号
sta_name  varchar(64),                    #阶段名
cour_id int                              #课程编号

);


#进度表：ol_smstage
create  table ol_smstage(
sms_id int  primary key auto_increment,   #编号
sms_name varchar(32),                    #小阶段名称
sms_file  varchar(128),                  #小阶段视频文件路径
sta_id int                               #阶段编号

);
#收藏中心
create table ol_collect(
coll_id   int PRIMARY KEY auto_increment,  #编号
stu_id   int,                              #学员编号
cour_id  int                               #课程编号
);

