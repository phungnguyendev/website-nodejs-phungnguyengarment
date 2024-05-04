-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (arm64)
--
-- Host: localhost    Database: phungnguyen_website_api
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `attachments`
--

DROP TABLE IF EXISTS `attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `attachments` (
  `id` int NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `caption` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `attachments`
--

LOCK TABLES `attachments` WRITE;
/*!40000 ALTER TABLE `attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `icon` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Áo thun tay dài','1SVJxUhz8FXHy-DdN3jQMVXC-_i9L2uTj',NULL,1,'2024-04-08 09:11:49','2024-04-08 16:27:19'),(2,'Áo thun tay ngắn','1c5haORuZr8fSRqfp50SP44V8M4YRy1Xk',NULL,2,'2024-04-08 16:28:21','2024-04-08 16:28:21'),(3,'Áo khoác & Áo khoác len','1a8SGYRgN1LuZnNdQEmZ2nu4bq1oewbJk',NULL,3,'2024-04-08 17:16:41','2024-04-08 17:16:41'),(4,'Quần vải dệt','1lwIG4-6gBbjH60tDmUtn-0IZc2p71G_R',NULL,4,'2024-04-08 17:17:14','2024-04-08 17:17:14'),(5,'Áo nữ','1-MI7yVfsBcBS45kdORjR2k6zGLAtXfTr',NULL,5,'2024-04-08 17:17:41','2024-04-08 17:17:41'),(6,'Váy ngắn','19imypYeDGBcOLloDI1DyCrXuyvrPt4jA',NULL,6,'2024-04-08 17:18:05','2024-04-08 17:18:05'),(7,'Đầm','1clj7RiZb8Y5dy7SoAXvh5NR2Nb_IVc_0',NULL,7,'2024-04-08 17:18:30','2024-04-08 17:18:30'),(8,'Cho bé','1KW3vNvt2fWysjqhOZpwXpaOmfO4jhvKT',NULL,8,'2024-04-08 17:19:01','2024-04-08 17:19:01'),(9,'Túi xách tay','1O6tHTHgTcJ_BwTgH3Ofrihta7Y_J9bNB',NULL,9,'2024-04-08 17:19:19','2024-04-08 17:19:19');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hero_banners`
--

DROP TABLE IF EXISTS `hero_banners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero_banners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero_banners`
--

LOCK TABLES `hero_banners` WRITE;
/*!40000 ALTER TABLE `hero_banners` DISABLE KEYS */;
INSERT INTO `hero_banners` VALUES (1,'Bạn không bao giờ sai với chất lượng của chúng tôi','1-wqUBRJkrxcGwXWiP2E6IUO9SpufLBg-',0,'2024-04-05 09:37:07','2024-04-08 00:57:43'),(2,'Bạn không bao giờ sai với chất lượng của chúng tôi 2','1woxVhsaj8C8-nAOVxETekMwCnYr-1rdK',1,'2024-04-05 09:54:42','2024-04-08 00:57:58'),(3,'Bạn không bao giờ sai với chất lượng của chúng tôi 3','17tXJE-uiLACWs6zJXov251Fv23rl2Ylr',2,'2024-04-05 11:29:13','2024-04-08 00:58:35');
/*!40000 ALTER TABLE `hero_banners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `home_products`
--

DROP TABLE IF EXISTS `home_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `home_products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `home_products`
--

LOCK TABLES `home_products` WRITE;
/*!40000 ALTER TABLE `home_products` DISABLE KEYS */;
INSERT INTO `home_products` VALUES (1,'Áo thun có cổ','1jkO6XVpG_62wC4Bn6R7WCSyQEDYuMP86',0,'2024-04-07 09:09:37','2024-04-07 17:29:21'),(2,'Áo hoodie / Áo khoác','1XL-_bsw1R7a_HmsnCu5SOtLG7WFIk_7g',1,'2024-04-07 09:10:49','2024-04-07 17:29:21'),(3,'Trang phục công sở','1QBzFrqPQCNHWEPPDgkKy61K0w12kTrfJ',2,'2024-04-07 09:11:41','2024-04-07 17:29:21'),(4,'Đồng phục công sở','1jkCQwPPTWyqzad7xc2WL7aZqxTUz3Als',3,'2024-04-07 09:12:44','2024-04-07 17:29:21'),(5,'Túi xách tay','1DhWgbyZGry1UU3wwU94FtRjw66SoJlBZ',4,'2024-04-07 09:24:33','2024-04-07 17:29:21');
/*!40000 ALTER TABLE `home_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `industry_sectors`
--

DROP TABLE IF EXISTS `industry_sectors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `industry_sectors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industry_sectors`
--

LOCK TABLES `industry_sectors` WRITE;
/*!40000 ALTER TABLE `industry_sectors` DISABLE KEYS */;
/*!40000 ALTER TABLE `industry_sectors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `partners`
--

DROP TABLE IF EXISTS `partners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `partners` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `partners`
--

LOCK TABLES `partners` WRITE;
/*!40000 ALTER TABLE `partners` DISABLE KEYS */;
INSERT INTO `partners` VALUES (1,'Apple','11Nw5502fcXUWBi3IWWBq1luFVCbmWyFA',0,'2024-04-08 00:49:20','2024-04-08 00:54:25'),(2,'Oppo','1eaGZYLUDEReBPyUAKc5i4Vl5IuUWjJmo',1,'2024-04-08 00:50:53','2024-04-08 00:54:25'),(3,'Samsung','1Ge7uJNVSQe8FK7uEqDuVCgrMNcaXr5Zj',2,'2024-04-08 00:51:21','2024-04-08 00:54:25'),(4,'Asus','1w4cg2vsFk9STpwaydZSZ6bxro6vMn0rf',3,'2024-04-08 00:51:34','2024-04-08 00:54:25'),(5,'LG','1TCFSE7yYuNKT3RV2ppvgbtbfX0obX_gO',4,'2024-04-08 00:51:50','2024-04-08 00:54:25');
/*!40000 ALTER TABLE `partners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_attachments`
--

DROP TABLE IF EXISTS `post_attachments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_attachments` (
  `id` int DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_attachments`
--

LOCK TABLES `post_attachments` WRITE;
/*!40000 ALTER TABLE `post_attachments` DISABLE KEYS */;
/*!40000 ALTER TABLE `post_attachments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `posts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `image_id` varchar(255) DEFAULT NULL,
  `published_at` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prizes`
--

DROP TABLE IF EXISTS `prizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prizes`
--

LOCK TABLES `prizes` WRITE;
/*!40000 ALTER TABLE `prizes` DISABLE KEYS */;
INSERT INTO `prizes` VALUES (1,'Ông Trần Xuân Tình (Tổng Giám Đốc) nhận giải thưởng “Sản Phẩm - Dịch Vụ Uy Tín Chất Lượng 2023”','1GWdcg8OUKoCJOn8Ptcy0U-tfT0pKWvQV',0,'2024-04-08 03:06:36','2024-04-08 03:10:07'),(2,'Bà Đỗ Thị Ngọc Phụng (Giám Đốc) nhận giải thưởng “Doanh Nhân - Tri Thức Tiêu Biểu Việt Nam 2023”','15WoSJJ-ZWwKMQ4XvllfAn6BpXfasoKM_',1,'2024-04-08 03:07:37','2024-04-08 03:10:07');
/*!40000 ALTER TABLE `prizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_categories`
--

DROP TABLE IF EXISTS `product_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_categories_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `product_categories_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_categories`
--

LOCK TABLES `product_categories` WRITE;
/*!40000 ALTER TABLE `product_categories` DISABLE KEYS */;
INSERT INTO `product_categories` VALUES (4,2,10,'2024-04-08 10:20:37','2024-04-08 16:58:23'),(5,2,11,'2024-04-08 15:29:40','2024-04-08 17:00:14'),(6,2,12,'2024-04-08 16:04:17','2024-04-08 17:00:19'),(7,2,13,'2024-04-08 16:05:50','2024-04-08 17:00:23'),(8,2,14,'2024-04-08 17:01:13','2024-04-08 17:01:13'),(9,1,15,'2024-04-08 17:10:15','2024-04-08 17:10:15'),(10,1,16,'2024-04-08 17:11:23','2024-04-08 17:12:52'),(11,1,17,'2024-04-08 17:11:36','2024-04-08 17:11:36'),(12,1,18,'2024-04-08 17:11:47','2024-04-08 17:11:47'),(13,1,19,'2024-04-08 17:11:59','2024-04-08 17:11:59'),(14,3,20,'2024-04-08 17:20:26','2024-04-08 17:20:26'),(15,3,21,'2024-04-08 17:20:47','2024-04-08 17:20:47'),(16,3,22,'2024-04-08 17:21:00','2024-04-08 17:21:00'),(17,3,23,'2024-04-08 17:21:11','2024-04-08 17:21:11'),(18,3,24,'2024-04-08 17:21:56','2024-04-08 17:21:56'),(19,4,25,'2024-04-08 17:22:51','2024-04-08 17:22:51'),(20,4,26,'2024-04-08 17:23:05','2024-04-08 17:23:05'),(21,4,27,'2024-04-08 17:23:16','2024-04-08 17:23:16'),(22,4,28,'2024-04-08 17:23:32','2024-04-08 17:23:32'),(23,4,29,'2024-04-08 17:23:49','2024-04-08 17:23:49'),(24,5,30,'2024-04-08 17:24:53','2024-04-08 17:24:53'),(25,5,31,'2024-04-08 17:25:07','2024-04-08 17:25:07'),(26,5,32,'2024-04-08 17:25:41','2024-04-08 17:25:41'),(27,5,33,'2024-04-08 17:25:57','2024-04-08 17:25:57'),(28,5,34,'2024-04-08 17:26:14','2024-04-08 17:26:14'),(29,5,35,'2024-04-08 17:26:45','2024-04-08 17:26:45'),(30,5,36,'2024-04-08 17:26:59','2024-04-08 17:26:59'),(31,5,37,'2024-04-08 17:27:11','2024-04-08 17:27:11'),(32,5,38,'2024-04-08 17:27:25','2024-04-08 17:27:25'),(33,5,39,'2024-04-08 17:27:40','2024-04-08 17:27:40'),(34,8,40,'2024-04-08 17:37:25','2024-04-08 17:37:25'),(35,8,41,'2024-04-08 17:40:09','2024-04-08 17:40:09'),(36,8,42,'2024-04-08 17:40:31','2024-04-08 17:40:31'),(37,8,43,'2024-04-08 17:40:41','2024-04-08 17:40:41'),(38,8,44,'2024-04-08 17:40:51','2024-04-08 17:40:51'),(39,9,45,'2024-04-08 17:41:34','2024-04-08 17:41:34'),(40,9,46,'2024-04-08 17:41:46','2024-04-08 17:41:46'),(41,9,47,'2024-04-08 17:41:55','2024-04-08 17:41:55'),(42,9,48,'2024-04-08 17:42:25','2024-04-08 17:42:25');
/*!40000 ALTER TABLE `product_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (10,'Polo shirt',NULL,'1OYrXQNgaj5ID6ucADgmzBSCTPY-Kpl01',0,'2024-04-08 10:20:37','2024-04-09 00:41:36'),(11,'Polo shirt',NULL,'1KDDr6C_F4NpvC8UIR6Biz_QaiOiz-dFm',1,'2024-04-08 15:29:40','2024-04-09 00:41:36'),(12,'Polo shirt',NULL,'1ejv-0IJE_XeQxcy0PvaJZUQDMjay_Cxs',2,'2024-04-08 16:04:17','2024-04-09 00:41:36'),(13,'Polo shirt',NULL,'1rzvEHWWdNXh8e5KZIGv2lFg3E_dYhPaE',3,'2024-04-08 16:05:50','2024-04-09 00:41:36'),(14,'Polo shirt',NULL,'1NAEtHEnE439IVzBPgYb_aXptDlQkrBbS',4,'2024-04-08 17:01:13','2024-04-09 00:41:36'),(15,'Long sleeved shirt',NULL,'1PREJPVjFUaheq5EbSfHG6JWnoJuOtcyq',5,'2024-04-08 17:10:15','2024-04-09 00:41:36'),(16,'Long sleeved shirt',NULL,'1eIixAYeoya3-GMF4rsQOM4Fmk7T_RS0_',6,'2024-04-08 17:11:23','2024-04-09 00:41:36'),(17,'Long sleeved shirt',NULL,'1h6DzlGZWsrWuARfz50SA4FDtCfzY0YLp',7,'2024-04-08 17:11:36','2024-04-09 00:41:36'),(18,'Long sleeved shirt',NULL,'1BUq4-4SborTNbQSfPo0OPPWzfuNpX6dJ',8,'2024-04-08 17:11:47','2024-04-09 00:41:36'),(19,'Long sleeved shirt',NULL,'1E4BYmnn2VUsCvC4TEjrzRPjDsyth8CfH',9,'2024-04-08 17:11:59','2024-04-09 00:41:36'),(20,'Coats & Sweaters',NULL,'12BpZiFI-H0yDH5sZRoB40uI6_QUmoYjF',10,'2024-04-08 17:20:25','2024-04-09 00:41:36'),(21,'Coats & Sweaters',NULL,'1Yw5Q4mzafVpD-5D8oCr2RLjO1xnbOOgH',11,'2024-04-08 17:20:47','2024-04-09 00:41:36'),(22,'Coats & Sweaters',NULL,'1x0Yfl4KgtMhlign--oT8eli2wh4ZZbb2',12,'2024-04-08 17:21:00','2024-04-09 00:41:36'),(23,'Coats & Sweaters',NULL,'1IWaBy3f0iDP7vqoMkmy29dkI8EuOkrul',13,'2024-04-08 17:21:11','2024-04-09 00:41:36'),(24,'Coats & Sweaters',NULL,'1jlPXAFVozU-SXPjQATMjYKausJabGDDp',14,'2024-04-08 17:21:56','2024-04-09 00:41:36'),(25,'Woven pants',NULL,'1TNPLFLB_KFDBYpiYm_K8b5_umHKJ19iA',15,'2024-04-08 17:22:51','2024-04-09 00:41:36'),(26,'Woven pants',NULL,'1k9D8YdXsqPhr11I6nr3OlXkgVkwlUiBj',16,'2024-04-08 17:23:05','2024-04-09 00:41:36'),(27,'Woven pants',NULL,'1uvDUr_gncZOEZju_Vg_Et_WGF7iI2cX-',17,'2024-04-08 17:23:16','2024-04-09 00:41:36'),(28,'Woven pants',NULL,'1zPAX56pdN_Gv7sKjt63zIqSnyzN6OBab',18,'2024-04-08 17:23:32','2024-04-09 00:41:36'),(29,'Woven pants',NULL,'1w3_4oG7JRtM70CU1EN8KrWRlMGO-NdbA',19,'2024-04-08 17:23:49','2024-04-09 00:41:36'),(30,'Women\'s shirt',NULL,'1VzQP6Sml950x6umDcPOaq9Ucl8Q7g1FZ',20,'2024-04-08 17:24:53','2024-04-09 00:41:36'),(31,'Women\'s shirt',NULL,'13EbAy16BGIk3eSNUSwgFf8663u_8sZ09',21,'2024-04-08 17:25:07','2024-04-09 00:41:36'),(32,'Women\'s shirt',NULL,'1Ma1YEzboUUR_7NEmJpeygLzDM5f-3SWW',22,'2024-04-08 17:25:41','2024-04-09 00:41:36'),(33,'Women\'s shirt',NULL,'1d3cEI_PyhbzvP5LZEBqvOhddvNmJeSEC',23,'2024-04-08 17:25:57','2024-04-09 00:41:36'),(34,'Women\'s shirt',NULL,'1FXwP0B-65tPpqytH0G1m2VyJQEU8S-3b',24,'2024-04-08 17:26:14','2024-04-09 00:41:36'),(35,'Women\'s shirt',NULL,'176CVyAO3xYBRhKyZUiXeweFo8UeqInPl',25,'2024-04-08 17:26:45','2024-04-09 00:41:36'),(36,'Women\'s shirt',NULL,'1VxrrAwHLIaxbcAuRVinoqe4XgJ4FKJr4',26,'2024-04-08 17:26:59','2024-04-09 00:41:36'),(37,'Women\'s shirt',NULL,'1oslMF0B729ChRCUl3ijAk4WWI3HbM10d',27,'2024-04-08 17:27:11','2024-04-09 00:41:36'),(38,'Women\'s shirt',NULL,'1OT6GBhbzsnBOtOO_cwQr8AGR7pR-D_Lg',28,'2024-04-08 17:27:24','2024-04-09 00:41:36'),(39,'Women\'s shirt',NULL,'1Spx2236_1fIlZTRPn5g3nX9ZjLXeP3ir',29,'2024-04-08 17:27:40','2024-04-09 00:41:36'),(40,'Dresses for girls',NULL,'1hD1l5PygrvmkRmGNEYwJWpp-xOX4UOUW',30,'2024-04-08 17:37:25','2024-04-09 00:41:36'),(41,'Dresses for girls',NULL,'16Hza2kFG9GpxF4XmmzCGJuOHR-SPxgrs',31,'2024-04-08 17:40:09','2024-04-09 00:41:36'),(42,'Dresses for girls',NULL,'1MNRZcwL75HZdmYvMzY4HTQVwrvkxXxRo',32,'2024-04-08 17:40:31','2024-04-09 00:41:36'),(43,'Dresses for girls',NULL,'1j9265AQKLa-eqQ0wToTikJaPVRp1HvuT',33,'2024-04-08 17:40:41','2024-04-09 00:41:36'),(44,'Dresses for girls',NULL,'1oDFwSmrSTyEkuDTy2nOOZ-jKhRrD1M30',34,'2024-04-08 17:40:51','2024-04-09 00:41:36'),(45,'Handbag',NULL,'18Iy1eeYN_TgOA54gDwCxRuWvbajW60Xd',35,'2024-04-08 17:41:34','2024-04-09 00:41:36'),(46,'Handbag',NULL,'1cns-1bqTKuk4cADb3p9RkEImrv4Lj6ZK',36,'2024-04-08 17:41:46','2024-04-09 00:41:36'),(47,'Handbag',NULL,'1okL4QLiWmGpymMW6fVJr_U5FiOIldQ9U',37,'2024-04-08 17:41:55','2024-04-09 00:41:36'),(48,'Handbag',NULL,'1gDi8HQOvu05NebpA8EeIxVCBkc0KUolg',38,'2024-04-08 17:42:25','2024-04-09 00:41:36');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `desc` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'Hàn Quốc','Kí kết và hợp tác với khách hàng HANSEA, sản xuất các sản phẩm may mặc xuất khẩu','11SptHJbZoCms2aAniuz6cWUJygduaeoe',0,'2024-04-08 03:51:34','2024-04-08 04:18:45'),(2,'Ấn Độ','Kí kết và hợp tác với khách hàng Ấn Độ, sản xuất các sản phẩm may mặc xuất khẩu','1Q4-lngrbF0nfOjCO2QFWt4TLG2K1X8Dv',1,'2024-04-08 03:53:18','2024-04-08 04:18:45'),(3,'Ấn Độ','Kí kết và hợp tác với khách hàng Ấn Độ, sản xuất các sản phẩm may mặc xuất khẩu','1EISY-gdtYOI1JwUFqKoM5WegdZD9Y4ia',2,'2024-04-08 04:08:50','2024-04-08 04:18:45'),(4,'Ấn Độ','Kí kết và hợp tác với khách hàng Ấn Độ, sản xuất các sản phẩm may mặc xuất khẩu','1QWvfvYGD4pJhoKbjooK5hWvnB4a366h8',3,'2024-04-08 04:09:33','2024-04-08 04:18:45'),(5,'Ấn Độ','Kí kết và hợp tác với khách hàng Ấn Độ, sản xuất các sản phẩm may mặc xuất khẩu','1sLlL-gk3HWp8XBu-47ry4yVcRk6s0oeq',4,'2024-04-08 04:10:10','2024-04-08 04:18:45'),(6,'Ấn Độ','Kí kết và hợp tác với khách hàng Ấn Độ, sản xuất các sản phẩm may mặc xuất khẩu','1h7lc8ElAm2klxDwJ-ZWx8CyeL2VWpebL',5,'2024-04-08 04:11:28','2024-04-08 04:18:45');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruitment_posts`
--

DROP TABLE IF EXISTS `recruitment_posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recruitment_posts` (
  `id` int DEFAULT NULL,
  `vacancies` varchar(255) DEFAULT NULL,
  `quantity` varchar(255) DEFAULT NULL,
  `wage` varchar(255) DEFAULT NULL,
  `working_time` varchar(255) DEFAULT NULL,
  `work_place` varchar(255) DEFAULT NULL,
  `expiration_date` varchar(255) DEFAULT NULL,
  `order_number` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  KEY `id` (`id`),
  CONSTRAINT `recruitment_posts_ibfk_1` FOREIGN KEY (`id`) REFERENCES `industry_sectors` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruitment_posts`
--

LOCK TABLES `recruitment_posts` WRITE;
/*!40000 ALTER TABLE `recruitment_posts` DISABLE KEYS */;
/*!40000 ALTER TABLE `recruitment_posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `app_password` varchar(255) DEFAULT NULL,
  `access_token` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'phungnguyengarment.dev@gmail.com','Phungnguyen@2771','',NULL,NULL,NULL,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBodW5nbmd1eWVuZ2FybWVudC5kZXZAZ21haWwuY29tIiwicGFzc3dvcmQiOiJQaHVuZ25ndXllbkAyNzcxIiwiaWF0IjoxNzEyNjMwOTEyLCJleHAiOjE3MTMyMzU3MTJ9.CnER033_dYH4Cl3HBm-dwULQ0KtLyezzy602ZFqrTuA','2024-04-05 09:20:34','2024-04-09 02:48:32');
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

-- Dump completed on 2024-04-09 14:19:12
