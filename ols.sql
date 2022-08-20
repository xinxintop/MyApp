/*
Navicat MySQL Data Transfer

Source Server         : 本地连接
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ols

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-08 19:25:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `indeximg`
-- ----------------------------
DROP TABLE IF EXISTS `indeximg`;
CREATE TABLE `indeximg` (
  `index_id` int(11) NOT NULL AUTO_INCREMENT,
  `index_url` varchar(32) DEFAULT NULL,
  `cate_type` int(11) DEFAULT NULL,
  `cour_id` int(11) DEFAULT NULL,
  `cote_id` int(11) DEFAULT NULL,
  `ol_sort` int(11) DEFAULT NULL COMMENT '图片轮播的顺序',
  PRIMARY KEY (`index_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of indeximg
-- ----------------------------
INSERT INTO `indeximg` VALUES ('2', '/lunbo2', '0', '1', '0', '2');
INSERT INTO `indeximg` VALUES ('3', '/lunbo3', '0', '2', '0', '3');
INSERT INTO `indeximg` VALUES ('4', '/lunbo4', '1', '0', '2', '4');
INSERT INTO `indeximg` VALUES ('5', '/lunbo5', '1', '0', '3', '5');
INSERT INTO `indeximg` VALUES ('6', '/lunbo6', '0', '3', '0', '6');
INSERT INTO `indeximg` VALUES ('7', '/lunbo7', '1', '0', '1', '1');
INSERT INTO `indeximg` VALUES ('8', '/lunbo8', '0', '5', '0', '5');
INSERT INTO `indeximg` VALUES ('9', '/lunbo9', '0', '5', '0', '5');
INSERT INTO `indeximg` VALUES ('10', '/lunbo9', '0', '5', '0', '5');

-- ----------------------------
-- Table structure for `ol_cotegory`
-- ----------------------------
DROP TABLE IF EXISTS `ol_cotegory`;
CREATE TABLE `ol_cotegory` (
  `cote_id` int(11) NOT NULL AUTO_INCREMENT,
  `cote_name` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`cote_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_cotegory
-- ----------------------------
INSERT INTO `ol_cotegory` VALUES ('1', '会员课');
INSERT INTO `ol_cotegory` VALUES ('2', '直播课');
INSERT INTO `ol_cotegory` VALUES ('3', '线上课');
INSERT INTO `ol_cotegory` VALUES ('4', '线下课');
INSERT INTO `ol_cotegory` VALUES ('5', '计算课');

-- ----------------------------
-- Table structure for `ol_course`
-- ----------------------------
DROP TABLE IF EXISTS `ol_course`;
CREATE TABLE `ol_course` (
  `cour_id` int(11) NOT NULL AUTO_INCREMENT,
  `cour_name` varchar(32) DEFAULT NULL,
  `content` varchar(256) DEFAULT NULL,
  `cote_id` int(11) DEFAULT NULL,
  `state` int(11) DEFAULT NULL,
  PRIMARY KEY (`cour_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_course
-- ----------------------------
INSERT INTO `ol_course` VALUES ('1', '前端web', '一门热门的计算机基础，前景可观', '4', '0');
INSERT INTO `ol_course` VALUES ('2', 'java 后端', '一门后端语言，热门岗位，欢迎加入', '2', '3');
INSERT INTO `ol_course` VALUES ('4', 'UI设计', '精美的页面都由你设计', '3', '1');
INSERT INTO `ol_course` VALUES ('5', 'Python', '人工智能，大数据', '4', '1');
INSERT INTO `ol_course` VALUES ('7', 'Java进阶版', '加基础', '1', '1');
INSERT INTO `ol_course` VALUES ('8', 'Linux服务器开发', '操作系统服务器的软件', '4', '0');
INSERT INTO `ol_course` VALUES ('9', 'Java高级应用', '一个强大的语言，无需质疑', '4', '0');
INSERT INTO `ol_course` VALUES ('10', 'ADFDS', 'XZVCADS', '4', '0');

-- ----------------------------
-- Table structure for `ol_cour_img`
-- ----------------------------
DROP TABLE IF EXISTS `ol_cour_img`;
CREATE TABLE `ol_cour_img` (
  `courimg_id` int(11) NOT NULL AUTO_INCREMENT,
  `img_url` varchar(128) DEFAULT NULL,
  `cour_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`courimg_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_cour_img
-- ----------------------------

-- ----------------------------
-- Table structure for `ol_smstage`
-- ----------------------------
DROP TABLE IF EXISTS `ol_smstage`;
CREATE TABLE `ol_smstage` (
  `sms_id` int(11) NOT NULL AUTO_INCREMENT,
  `sms_name` varchar(32) DEFAULT NULL,
  `sms_file` varchar(128) DEFAULT NULL,
  `sta_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sms_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_smstage
-- ----------------------------
INSERT INTO `ol_smstage` VALUES ('24', null, '的规范化', null);
INSERT INTO `ol_smstage` VALUES ('25', null, '电饭锅和', null);

-- ----------------------------
-- Table structure for `ol_stage`
-- ----------------------------
DROP TABLE IF EXISTS `ol_stage`;
CREATE TABLE `ol_stage` (
  `sta_id` int(11) NOT NULL AUTO_INCREMENT,
  `sta_name` varchar(64) DEFAULT NULL,
  `cour_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`sta_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_stage
-- ----------------------------
INSERT INTO `ol_stage` VALUES ('9', '第九章', '1');
INSERT INTO `ol_stage` VALUES ('10', '吧张', '2');

-- ----------------------------
-- Table structure for `ol_stu`
-- ----------------------------
DROP TABLE IF EXISTS `ol_stu`;
CREATE TABLE `ol_stu` (
  `stu_id` int(11) NOT NULL AUTO_INCREMENT,
  `grade` varchar(32) DEFAULT NULL,
  `oid` int(11) DEFAULT NULL,
  `score` decimal(11,2) DEFAULT NULL COMMENT '成绩',
  PRIMARY KEY (`stu_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_stu
-- ----------------------------
INSERT INTO `ol_stu` VALUES ('2', '2206', '12', '12.22');
INSERT INTO `ol_stu` VALUES ('3', '2206', '13', '44.12');
INSERT INTO `ol_stu` VALUES ('4', '2205', '11', '324.00');
INSERT INTO `ol_stu` VALUES ('5', '2206', '13', '12.22');

-- ----------------------------
-- Table structure for `ol_stu_cour`
-- ----------------------------
DROP TABLE IF EXISTS `ol_stu_cour`;
CREATE TABLE `ol_stu_cour` (
  `os_id` int(11) NOT NULL AUTO_INCREMENT,
  `cour_id` int(11) DEFAULT NULL,
  `sta_id` int(11) DEFAULT NULL,
  `sms_id` int(11) NOT NULL COMMENT '学员阶段',
  `stu_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`os_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_stu_cour
-- ----------------------------
INSERT INTO `ol_stu_cour` VALUES ('2', '1', '2', '3', '4');
INSERT INTO `ol_stu_cour` VALUES ('3', '7', '6', '5', '4');
INSERT INTO `ol_stu_cour` VALUES ('4', '1', '2', '3', '4');
INSERT INTO `ol_stu_cour` VALUES ('5', '1', '2', '3', '4');
INSERT INTO `ol_stu_cour` VALUES ('6', '1', '2', '3', '4');

-- ----------------------------
-- Table structure for `ol_teach`
-- ----------------------------
DROP TABLE IF EXISTS `ol_teach`;
CREATE TABLE `ol_teach` (
  `ot_id` int(11) NOT NULL AUTO_INCREMENT,
  `oid` int(11) DEFAULT NULL,
  `introduce` varchar(128) DEFAULT NULL,
  `expr` varchar(32) DEFAULT NULL,
  `level` int(11) DEFAULT NULL,
  PRIMARY KEY (`ot_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_teach
-- ----------------------------
INSERT INTO `ol_teach` VALUES ('2', '3', 'python讲师', '13年', '5');

-- ----------------------------
-- Table structure for `ol_tech_course`
-- ----------------------------
DROP TABLE IF EXISTS `ol_tech_course`;
CREATE TABLE `ol_tech_course` (
  `tc_id` int(11) NOT NULL AUTO_INCREMENT,
  `ot_id` int(11) DEFAULT NULL,
  `sta_id` int(11) DEFAULT NULL,
  `sms_id` int(11) DEFAULT NULL,
  `cour_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`tc_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_tech_course
-- ----------------------------
INSERT INTO `ol_tech_course` VALUES ('2', '3', '6', '5', '4');
INSERT INTO `ol_tech_course` VALUES ('3', '2', '3', '4', '5');

-- ----------------------------
-- Table structure for `ol_user`
-- ----------------------------
DROP TABLE IF EXISTS `ol_user`;
CREATE TABLE `ol_user` (
  `oid` int(11) NOT NULL AUTO_INCREMENT,
  `oname` varchar(32) DEFAULT NULL,
  `ogender` int(11) DEFAULT NULL,
  `upwd` varchar(32) DEFAULT NULL,
  `email` varchar(64) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `touxiang` varchar(128) DEFAULT NULL,
  `real_name` varchar(32) DEFAULT NULL,
  `role` int(11) DEFAULT NULL,
  PRIMARY KEY (`oid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ol_user
-- ----------------------------
INSERT INTO `ol_user` VALUES ('6', '付鑫鑫', '1', '123', '123\n		', '123', '123', '123', '2');
INSERT INTO `ol_user` VALUES ('10', '余老师', '0', '123', '123123\n		', '12343345', '12313', '于福康', '1');
INSERT INTO `ol_user` VALUES ('12', '沙发', '1', '爱尚符', '\n', '56 ', 'asd', '双方都 ', '1');
INSERT INTO `ol_user` VALUES ('17', '123', '1', '', '\n', '', '', '', '1');
INSERT INTO `ol_user` VALUES ('19', 'fuxinxin1', '0', '12334', null, null, null, null, null);
INSERT INTO `ol_user` VALUES ('20', '付鑫鑫', '1', '12334', null, 'xCFSAfFEDW', '', '', null);
INSERT INTO `ol_user` VALUES ('21', '撒啊', '1', '123', 'dasfa\n', 'asdfd', 'adsf ', 'efa', '1');
