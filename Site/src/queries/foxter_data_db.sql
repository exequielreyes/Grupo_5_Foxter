/*
-- Query: SELECT * FROM foxter_db.categories
LIMIT 0, 1000

-- Date: 2022-05-19 20:25
*/
INSERT INTO `categories` (`idCategory`,`name`) VALUES (1,'Remera');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (2,'Campera');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (3,'Pantalon');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (4,'Musculosa');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (5,'Short');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (6,'Buzo');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (7,'Calza');
INSERT INTO `categories` (`idCategory`,`name`) VALUES (8,'Malla');

/*-- Query: SELECT * FROM foxter_db.salecategories
LIMIT 0, 1000

-- Date: 2022-05-19 20:26
*/
INSERT INTO `salecategories` (`idSaleCategory`,`name`) VALUES (1,'Oferta');
INSERT INTO `salecategories` (`idSaleCategory`,`name`) VALUES (2,'Tendencia');
/*
-- Query: SELECT * FROM foxter_db.sexcategories
LIMIT 0, 1000

-- Date: 2022-05-19 20:27
*/
INSERT INTO `sexcategories` (`idSexCategories`,`name`) VALUES (1,'Hombre');
INSERT INTO `sexcategories` (`idSexCategories`,`name`) VALUES (2,'Mujer');
INSERT INTO `sexcategories` (`idSexCategories`,`name`) VALUES (3,'Unisex');
/*



-- Query: SELECT * FROM foxter_db.products
LIMIT 0, 1000

-- Date: 2022-05-19 20:53
*/
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (1,'Remera Puma Run Favorite Heather',4500,15,1,'Remera negra  de algodon',2,1);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (2,'Musculosa Asics Back',5000,0,4,'Musculosa negra',1,2);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (3,'Pantalón Nike Pro Therma',8500,0,3,'Pantalon largo',3,3);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (4,'Buzo Nike Sportswear Jdi',12000,0,6,'Buzo de cuero',1,2);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (5,'Campera Topper Gd',25000,50,2,'Campera de cuerina',2,1);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (6,'Calza Gilbert Classic',3500,0,7,'Calza de mujer',2,3);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (7,'Traje de baño adidas Colorblock',8500,0,8,'Traje de baño',1,3);
INSERT INTO `products` (`idProduct`,`name`,`price`,`discount`,`idCategory`,`description`,`idSexCategory`,`idSaleCategory`) VALUES (8,'Short Lotto Solista',2900,0,5,'Short de algodon',1,2);

/*
-- Query: SELECT * FROM foxter_db.images
LIMIT 0, 1000

-- Date: 2022-05-19 21:11
*/

INSERT INTO `images` (`idImage`,`name`,`productId`) VALUES (1,'default-image.png',2);
INSERT INTO `images` (`idImage`,`name`,`productId`) VALUES (2,'image.png',1);

/*
-- Query: SELECT * FROM foxter_db.sizes
LIMIT 0, 1000

-- Date: 2022-05-19 20:28
*/
INSERT INTO `sizes` (`idSize`,`name`) VALUES (1,'S');
INSERT INTO `sizes` (`idSize`,`name`) VALUES (2,'M');
INSERT INTO `sizes` (`idSize`,`name`) VALUES (3,'L');
INSERT INTO `sizes` (`idSize`,`name`) VALUES (4,'XL');
INSERT INTO `sizes` (`idSize`,`name`) VALUES (5,'XXL');
/*
-- Query: SELECT * FROM foxter_db.userproduct
LIMIT 0, 1000

-- Date: 2022-05-19 21:09
*/
INSERT INTO `userproduct` (`iduserProduct`,`userId`,`productId`) VALUES (1,1,2);
INSERT INTO `userproduct` (`iduserProduct`,`userId`,`productId`) VALUES (2,1,4);
INSERT INTO `userproduct` (`iduserProduct`,`userId`,`productId`) VALUES (3,1,2);
INSERT INTO `userproduct` (`iduserProduct`,`userId`,`productId`) VALUES (4,1,3);
/*
-- Query: SELECT * FROM foxter_db.users
LIMIT 0, 1000

-- Date: 2022-05-19 21:01
*/
INSERT INTO `users` (`idUser`,`name`,`lastName`,`date`,`password`,`email`,`avatar`,`remember`) VALUES (1,'misael','perez','1998-06-26 00:00:00','$2a$10$QU/Dv3jWZDhWqi.ZGZkLM.RItNLFs9LpCErRCjZpTDY0Gb/5P2qtS','misael98@gmail.com','default-image.png',1);
/*
-- Query: SELECT * FROM foxter_db.productsSizes
LIMIT 0, 1000

-- Date: 2022-05-19 21:06
*/
INSERT INTO `productsSizes` (`idsizeProduct`,`sizeId`,`productsId`) VALUES (1,2,4);
INSERT INTO `productsSizes` (`idsizeProduct`,`sizeId`,`productsId`) VALUES (2,1,3);
INSERT INTO `productsSizes` (`idsizeProduct`,`sizeId`,`productsId`) VALUES (3,4,1);
INSERT INTO `productsSizes` (`idsizeProduct`,`sizeId`,`productsId`) VALUES (4,4,3);

