-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: localhost    Database: user_info
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `collect_comic`
--

DROP TABLE IF EXISTS `collect_comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `collect_comic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `name` varchar(150) NOT NULL,
  `url` varchar(45) NOT NULL,
  `pic` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect_comic`
--

LOCK TABLES `collect_comic` WRITE;
/*!40000 ALTER TABLE `collect_comic` DISABLE KEYS */;
INSERT INTO `collect_comic` VALUES (7,1,'解离妖圣','https://www.bnman.net/comic/523.html','https://img.hngxgt.net/upload/vod/2019-03-18/15529202900.jpg'),(8,1,'愚蠢天使与恶魔共舞','https://www.bnman.net/comic/1025.html','https://img.hngxgt.net/upload/vod/2019-01-07/15468396226.jpg'),(9,1,'怎么办！我穿越成了最弱小野怪','https://www.bnman.net/comic/29218.html','http://i.ywzqzx.com/mh/cover/2022/03/20/08ca63e8d7.jpg'),(11,1,'酒神','https://www.bnman.net/comic/26370.html','https://img.hngxgt.net/manhua/20210122/2d64318889865c9e20eabe98f67dc39c.jpg'),(13,1,'大公，请忍耐','https://www.bnman.net/comic/28287.html','http://i.ywzqzx.com/mh/cover/2022/01/01/32f9510eca.jpg');
/*!40000 ALTER TABLE `collect_comic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `history_comic`
--

DROP TABLE IF EXISTS `history_comic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `history_comic` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` varchar(45) NOT NULL,
  `url` varchar(45) NOT NULL,
  `pic` varchar(80) NOT NULL,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `history_comic`
--

LOCK TABLES `history_comic` WRITE;
/*!40000 ALTER TABLE `history_comic` DISABLE KEYS */;
INSERT INTO `history_comic` VALUES (3,'1','https://www.bnman.net/comic/24254.html','https://img.hngxgt.net/manhua/20200616/a85f646e77939cab50873e919a0daf48.jpg','我有孩子了'),(4,'1','https://www.bnman.net/comic/26034.html','https://img.hngxgt.net/manhua/20201223/8d9e76bd5f36fd528c5003e8ddb699c2.jpg','少年少女啊，贪恋青春吧'),(5,'1','https://www.bnman.net/comic/13296.html','https://img.hngxgt.net/upload/vod/2019-01-07/154684278417.jpg','醒世铃音'),(6,'29','https://www.bnman.net/comic/19258.html','https://img.hngxgt.net/upload/vod/2019-08-05/15649942660.jpg','合法百合夫妇本');
/*!40000 ALTER TABLE `history_comic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `account_number` varchar(45) NOT NULL,
  `token` varchar(45) DEFAULT NULL,
  `online` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `account_number_UNIQUE` (`account_number`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='用户信息表';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'辛洋','123','17671180384','85647',0),(2,'打野','123','14564','5564',0),(4,'李白','123','10086',NULL,0),(5,'4145','123','1767118',NULL,0),(7,'胡','123','17671',NULL,0),(11,'undefined','123','10056',NULL,0),(13,'数据','123','Abc123',NULL,0),(14,'老刘','123','undefined',NULL,0),(22,'老八','123','10010',NULL,0),(28,'ass','123','10011',NULL,0),(29,'admin','123','admin',NULL,0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-22 16:09:26
