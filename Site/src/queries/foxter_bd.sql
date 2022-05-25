-- MySQL Script generated by MySQL Workbench
-- Tue May 17 20:00:49 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema foxter_db
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS  `foxter_db`;
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `foxter_db`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`categories` (
  `idCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`images`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`images` (
  `idImage` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
   `productId` INT NOT NULL,
  PRIMARY KEY (`idImage`),
  CONSTRAINT `fk_productIdImage`
    FOREIGN KEY (`productId`)
    REFERENCES `foxter_db`.`products` (`idProduct`)
   )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`sexCategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`sexCategories` (
  `idSexCategories` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idSexCategories`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`SaleCategories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`saleCategories` (
  `idSaleCategory` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idSaleCategory`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`products`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`products` (
  `idProduct` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `price` INT(10) NOT NULL,
  `discount` INT NOT NULL DEFAULT 0,
  `idCategory` INT NULL,
  `description` TEXT(255) NULL,
  `idSexCategory` INT NOT NULL,
  `idSaleCategory` INT NOT NULL,
  PRIMARY KEY (`idProduct`),
  CONSTRAINT `fk_idCategory`
    FOREIGN KEY (`idCategory`)
    REFERENCES `foxter_db`.`categories` (`idCategory`),
 
  CONSTRAINT `fk_sexCategory`
    FOREIGN KEY (`idSexCategory`)
    REFERENCES `foxter_db`.`sexCategories` (`idSexCategories`),

  CONSTRAINT `fk_saleCategory`
    FOREIGN KEY (`idSaleCategory`)
    REFERENCES `foxter_db`.`SaleCategories` (`idSaleCategory`)
  )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `foxter_db`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`users` (
  `idUser` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `lastName` VARCHAR(100) NOT NULL,
  `date` DATETIME NULL,
  `password` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `avatar` VARCHAR(100) NULL,
  `remember` TINYINT NULL,
  PRIMARY KEY (`idUser`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`userProduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`userProduct` (
  `iduserProduct` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `productId` INT NOT NULL,
  PRIMARY KEY (`iduserProduct`),
  CONSTRAINT `fk_userId`
    FOREIGN KEY (`userId`)
    REFERENCES `foxter_db`.`users` (`idUser`)
    ,
  CONSTRAINT `fk_productId`
    FOREIGN KEY (`productId`)
    REFERENCES `foxter_db`.`products` (`idProduct`)
   )
ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `foxter_db`.`sizes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`sizes` (
  `idSize` INT NOT NULL AUTO_INCREMENT,
  `name` CHAR(10) NOT NULL,
  PRIMARY KEY (`idSize`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `foxter_db`.`sizeProduct`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `foxter_db`.`productsSizes` (
  `idsizeProduct` INT NOT NULL AUTO_INCREMENT,
  `sizeId` INT NULL,
  `productsId` INT NULL,
  PRIMARY KEY (`idsizeProduct`),
  CONSTRAINT `fk_sizeId`
    FOREIGN KEY (`sizeId`)
    REFERENCES `foxter_db`.`sizes` (`idSize`)
   ,
  CONSTRAINT `fk_productsId`
    FOREIGN KEY (`productsId`)
    REFERENCES `foxter_db`.`products` (`idProduct`)
    )
ENGINE = InnoDB;
