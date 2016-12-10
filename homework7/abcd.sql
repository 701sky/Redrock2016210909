/*
Navicat MySQL Data Transfer

Source Server         : A
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : a

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-12-10 15:32:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for abcd
-- ----------------------------
DROP TABLE IF EXISTS `abcd`;
CREATE TABLE `abcd` (
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of abcd
-- ----------------------------
INSERT INTO `abcd` VALUES ('', '');
INSERT INTO `abcd` VALUES ('1', '1');
