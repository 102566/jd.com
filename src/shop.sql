-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2020-07-06 15:26:57
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
-- 数据库： `jd`
--

-- --------------------------------------------------------

--
-- 表的结构 `shop`
--

CREATE TABLE `shop` (
  `id` int(255) NOT NULL,
  `title` char(255) NOT NULL,
  `price` int(255) NOT NULL,
  `num` int(11) NOT NULL,
  `pic` varchar(999) NOT NULL,
  `details` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `shop`
--

INSERT INTO `shop` (`id`, `title`, `price`, `num`, `pic`, `details`) VALUES
(2, '英特尔酷睿i5 9400f组装电脑主机独显游戏台式机家用电竞吃鸡英雄联盟LOL台式电脑整机全套 套餐二（i5+1050独显+8g内存256g固态）', 2699, 11, '[{\"title\":\"small\",\"src\":\"/img/tj1.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/i5-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-9.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj3-10.jpg\"}]', '<h1>假装有详情</h1>'),
(3, 'Apple iPhone 11 Pro (A2217) 256GB 金色 移动联通电信4G手机 双卡双待', 5888, 132, '[{\"title\":\"small\",\"src\":\"/img/wwtj1.jpg.webp\"},{\"title\":\"small\",\"src\":\"/img/pg1.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/pg1-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-9.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj1-10.jpg\"}]', '<h1>假装有</h1>'),
(4, '诺泰（nuotai） 官方护腰带 腰间盘突出腰脱腰肌劳损腰围治疗仪 男女通用透气款医用腰托护腰', 169, 341, '[{\"title\":\"small\",\"src\":\"/img/sj6.jpg.webp\"},{\"title\":\"small\",\"src\":\"/img/hy.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/hy1-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-9.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj4-10.jpg\"}]', '<h1>我装</h1>'),
(5, 'CaevKceai男士平角内裤 纯棉透气四角裤U凸式内裤男大码青年本命年大红短裤头裤衩', 58, 314, '[{\"title\":\"small\",\"src\":\"/img/sj7.jpg.webp\"},{\"title\":\"small\",\"src\":\"/img/nk.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/nk1-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-9.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj2-10.jpg\"}]', '<h1>heihei</h1>'),
(6, 'Vortexgear POK3R V2 RGB 机械键盘cherry樱桃轴 矮轴 有线键盘 游戏编程 红轴', 148, 999, '[{\"title\":\"small\",\"src\":\"/img/sj8.jpg.webp\"},{\"title\":\"small\",\"src\":\"/img/ck.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/ck1-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-1.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-2.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-3.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-4.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-5.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-6.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-7.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-8.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-9.jpg\"},{\"title\":\"small\",\"src\":\"/img/faj5-10.jpg\"}]', '<h1>1</h1>');

--
-- 转储表的索引
--

--
-- 表的索引 `shop`
--
ALTER TABLE `shop`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `shop`
--
ALTER TABLE `shop`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
