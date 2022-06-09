-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.4.22-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS  `foxter_db`;

-- Volcando estructura para tabla foxter_db.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `idCategory` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.images
CREATE TABLE IF NOT EXISTS `images` (
  `idImage` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`idImage`),
  KEY `fk_productIdImage` (`productId`),
  CONSTRAINT `fk_productIdImage` FOREIGN KEY (`productId`) REFERENCES `products` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.products
CREATE TABLE IF NOT EXISTS `products` (
  `idProduct` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `discount` int(11) NOT NULL DEFAULT 0,
  `idCategory` int(11) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `idSexCategory` int(11) NOT NULL,
  `idSaleCategory` int(11) NOT NULL,
  PRIMARY KEY (`idProduct`),
  KEY `fk_idCategory` (`idCategory`),
  KEY `fk_sexCategory` (`idSexCategory`),
  KEY `fk_saleCategory` (`idSaleCategory`),
  CONSTRAINT `fk_idCategory` FOREIGN KEY (`idCategory`) REFERENCES `categories` (`idCategory`),
  CONSTRAINT `fk_saleCategory` FOREIGN KEY (`idSaleCategory`) REFERENCES `salecategories` (`idSaleCategory`),
  CONSTRAINT `fk_sexCategory` FOREIGN KEY (`idSexCategory`) REFERENCES `sexcategories` (`idSexCategories`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.productssizes
CREATE TABLE IF NOT EXISTS `productssizes` (
  `idsizeProduct` int(11) NOT NULL AUTO_INCREMENT,
  `sizeId` int(11) DEFAULT NULL,
  `productsId` int(11) DEFAULT NULL,
  PRIMARY KEY (`idsizeProduct`),
  KEY `fk_sizeId` (`sizeId`),
  KEY `fk_productsId` (`productsId`),
  CONSTRAINT `fk_productsId` FOREIGN KEY (`productsId`) REFERENCES `products` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_sizeId` FOREIGN KEY (`sizeId`) REFERENCES `sizes` (`idSize`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.salecategories
CREATE TABLE IF NOT EXISTS `salecategories` (
  `idSaleCategory` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idSaleCategory`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.sexcategories
CREATE TABLE IF NOT EXISTS `sexcategories` (
  `idSexCategories` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`idSexCategories`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.sizes
CREATE TABLE IF NOT EXISTS `sizes` (
  `idSize` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  PRIMARY KEY (`idSize`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.userproduct
CREATE TABLE IF NOT EXISTS `userproduct` (
  `iduserProduct` int(11) NOT NULL AUTO_INCREMENT,
  `userId` int(11) NOT NULL,
  `productId` int(11) NOT NULL,
  PRIMARY KEY (`iduserProduct`),
  KEY `fk_productId` (`productId`),
  KEY `fk_userId` (`userId`),
  CONSTRAINT `fk_productId` FOREIGN KEY (`productId`) REFERENCES `products` (`idProduct`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_userId` FOREIGN KEY (`userId`) REFERENCES `users` (`idUser`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla foxter_db.users
CREATE TABLE IF NOT EXISTS `users` (
  `idUser` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastName` varchar(100) NOT NULL,
  `date` datetime DEFAULT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  `rol` varchar(100) DEFAULT NULL,
  `remember` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`idUser`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

-- La exportación de datos fue deseleccionada.

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
