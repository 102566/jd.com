-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-06 15:26:53
-- 服务器版本： 5.7.26
-- PHP 版本： 7.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `study`
--

-- --------------------------------------------------------

--
-- 表的结构 `studytarget`
--

CREATE TABLE `studytarget` (
  `user_id` int(16) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_password` varchar(255) NOT NULL,
  `user_phone` bigint(11) NOT NULL,
  `user_sex` varchar(1) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `studytarget`
--

INSERT INTO `studytarget` (`user_id`, `user_name`, `user_password`, `user_phone`, `user_sex`) VALUES
(32, 'lazyma', 'e10adc3949ba59abbe56e057f20f883e', 13666666666, '男'),
(31, 'nishiren', 'df66520556c5edd0be03e17ea9dc8dda', 13666666666, '男'),
(30, 'haonanren', '04e9d2c82cdc2bd2a8a3daae48515c9b', 13666666666, '男'),
(29, 'lazyman', 'e10adc3949ba59abbe56e057f20f883e', 13666666666, '男'),
(27, 'King', '04e9d2c82cdc2bd2a8a3daae48515c9b', 13666666666, '男'),
(28, 'bird', '04e9d2c82cdc2bd2a8a3daae48515c9b', 13666666666, '男');

--
-- 转储表的索引
--

--
-- 表的索引 `studytarget`
--
ALTER TABLE `studytarget`
  ADD PRIMARY KEY (`user_id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `studytarget`
--
ALTER TABLE `studytarget`
  MODIFY `user_id` int(16) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
