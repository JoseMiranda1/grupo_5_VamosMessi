-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-03-2022 a las 18:38:17
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lasabanadb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brands`
--

CREATE TABLE `brands` (
  `idBrand` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `brands`
--

INSERT INTO `brands` (`idBrand`, `name`) VALUES
(1, 'Natal'),
(2, 'Rickard'),
(3, 'Silvester'),
(4, 'Vallie'),
(5, 'Sherwood'),
(6, 'Egbert'),
(7, 'Eduino'),
(8, 'Quentin'),
(9, 'Isa'),
(10, 'Upton');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproduct`
--

CREATE TABLE `cartproduct` (
  `idCartProduct` int(10) UNSIGNED NOT NULL,
  `productPrice` decimal(18,2) DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idCart` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cartproduct`
--

INSERT INTO `cartproduct` (`idCartProduct`, `productPrice`, `quantity`, `idProduct`, `idCart`) VALUES
(1, '0.00', 1, 7, NULL),
(2, '0.00', 2, 10, NULL),
(3, '0.00', 3, 8, NULL),
(4, '0.00', 4, 1, NULL),
(5, '0.00', 5, 9, NULL),
(6, '0.00', 6, 3, NULL),
(7, '0.00', 7, 5, NULL),
(8, '0.00', 8, 4, NULL),
(9, '0.00', 9, 2, NULL),
(10, '0.00', 10, 6, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carts`
--

CREATE TABLE `carts` (
  `idCart` int(10) UNSIGNED NOT NULL,
  `idUser` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `carts`
--

INSERT INTO `carts` (`idCart`, `idUser`) VALUES
(1, 1),
(7, 2),
(3, 3),
(4, 4),
(5, 5),
(10, 6),
(9, 7),
(6, 8),
(2, 9),
(8, 10);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategories` int(10) UNSIGNED NOT NULL,
  `typeOfCategory` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategories`, `typeOfCategory`) VALUES
(1, 'tortor quis turpis sed ante vivamus tortor duis mattis egestas metus aenean fermentum donec'),
(2, 'sem sed sagittis nam congue risus semper porta volutpat quam pede lobortis ligula sit amet'),
(3, 'a ipsum integer a nibh in quis justo maecenas rhoncus aliquam lacus morbi'),
(4, 'bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce posuere felis sed lacus morbi'),
(5, 'duis mattis egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero'),
(6, 'sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in'),
(7, 'donec posuere metus vitae ipsum aliquam non mauris morbi non'),
(8, 'nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae mauris viverra diam vitae'),
(9, 'est risus auctor sed tristique in tempus sit amet sem fusce consequat nulla nisl nunc nisl'),
(10, 'ut tellus nulla ut erat id mauris vulputate elementum nullam varius nulla facilisi cras non velit nec nisi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryproduct`
--

CREATE TABLE `categoryproduct` (
  `idCategoryProduct` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idCategories` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoryproduct`
--

INSERT INTO `categoryproduct` (`idCategoryProduct`, `idProduct`, `idCategories`) VALUES
(1, 3, 7),
(2, 8, 5),
(3, 1, 8),
(4, 10, 4),
(5, 2, 10),
(6, 9, 1),
(7, 7, 6),
(8, 5, 9),
(9, 6, 3),
(10, 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colorproduct`
--

CREATE TABLE `colorproduct` (
  `idColorProduct` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idColor` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colorproduct`
--

INSERT INTO `colorproduct` (`idColorProduct`, `idProduct`, `idColor`) VALUES
(1, 7, 3),
(2, 10, 4),
(3, 2, 8),
(4, 8, 9),
(5, 4, 10),
(6, 9, 6),
(7, 5, 7),
(8, 3, 5),
(9, 6, 2),
(10, 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colors`
--

CREATE TABLE `colors` (
  `idColor` int(10) UNSIGNED NOT NULL,
  `color` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colors`
--

INSERT INTO `colors` (`idColor`, `color`) VALUES
(1, 'Khaki'),
(2, 'Orange'),
(3, 'Orange'),
(4, 'Maroon'),
(5, 'Mauv'),
(6, 'Crimson'),
(7, 'Indigo'),
(8, 'Yellow'),
(9, 'Maroon'),
(10, 'Orange');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idProduct` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` decimal(18,2) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `image` varchar(200) DEFAULT NULL,
  `createDate` datetime NOT NULL,
  `idBrand` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idProduct`, `name`, `price`, `stock`, `image`, `createDate`, `idBrand`) VALUES
(1, 'justo lacinia eget tincidunt eget tempus vel pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus', '0.00', 1, 'http://dummyimage.com/148x100.png/cc0000/ffffff', '0000-00-00 00:00:00', 10),
(2, 'eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper', '0.00', 2, 'http://dummyimage.com/186x100.png/5fa2dd/ffffff', '0000-00-00 00:00:00', 1),
(3, 'vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed', '0.00', 3, 'http://dummyimage.com/180x100.png/ff4444/ffffff', '0000-00-00 00:00:00', 2),
(4, 'penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque', '0.00', 4, 'http://dummyimage.com/129x100.png/5fa2dd/ffffff', '0000-00-00 00:00:00', 4),
(5, 'sapien in sapien iaculis congue vivamus metus arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc', '0.00', 5, 'http://dummyimage.com/128x100.png/dddddd/000000', '0000-00-00 00:00:00', 3),
(6, 'neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et', '0.00', 6, 'http://dummyimage.com/185x100.png/ff4444/ffffff', '0000-00-00 00:00:00', 6),
(7, 'phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla', '0.00', 7, 'http://dummyimage.com/122x100.png/ff4444/ffffff', '0000-00-00 00:00:00', 9),
(8, 'suscipit nulla elit ac nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in', '0.00', 8, 'http://dummyimage.com/142x100.png/cc0000/ffffff', '0000-00-00 00:00:00', 8),
(9, 'viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum', '0.00', 9, 'http://dummyimage.com/107x100.png/dddddd/000000', '0000-00-00 00:00:00', 7),
(10, 'mauris morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non sodales', '0.00', 10, 'http://dummyimage.com/122x100.png/ff4444/ffffff', '0000-00-00 00:00:00', 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizeproduct`
--

CREATE TABLE `sizeproduct` (
  `idSizeProduct` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idSize` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizeproduct`
--

INSERT INTO `sizeproduct` (`idSizeProduct`, `idProduct`, `idSize`) VALUES
(1, 9, 8),
(2, 3, 6),
(3, 1, 2),
(4, 10, 5),
(5, 5, 10),
(6, 8, 1),
(7, 4, 3),
(8, 6, 9),
(9, 7, 4),
(10, 2, 7);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizes`
--

CREATE TABLE `sizes` (
  `idSize` int(10) UNSIGNED NOT NULL,
  `typeOfSize` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizes`
--

INSERT INTO `sizes` (`idSize`, `typeOfSize`) VALUES
(1, '3XL'),
(2, '3XL'),
(3, 'XS'),
(4, 'XL'),
(5, 'XL'),
(6, '2XL'),
(7, 'M'),
(8, '2XL'),
(9, 'S'),
(10, 'L');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `idUser` int(10) UNSIGNED NOT NULL,
  `userName` varchar(150) NOT NULL,
  `email` varchar(50) NOT NULL,
  `userPassword` varchar(50) NOT NULL,
  `adress` varchar(50) DEFAULT NULL,
  `postCode` varchar(25) DEFAULT NULL,
  `country` varchar(50) DEFAULT NULL,
  `phone` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `userName`, `email`, `userPassword`, `adress`, `postCode`, `country`, `phone`) VALUES
(1, 'Wayland Gieves', 'wgieves0@shinystat.com', 'GzsdoxIo', NULL, NULL, 'Nauru', '865-559-1030'),
(2, 'Oliver Dunsford', 'odunsford1@craigslist.org', 'sO9J6PTbEHQ', NULL, '461 58', 'Sweden', '334-571-4274'),
(3, 'Vance Kernell', 'vkernell2@sun.com', 't9ocmry', NULL, '396130', 'Russia', '601-799-2515'),
(4, 'Papagena Salzberger', 'psalzberger3@topsy.com', 'Ahey2Goxdojn', NULL, NULL, 'China', '904-425-5954'),
(5, 'Basia Lies', 'blies4@state.gov', '6PV24tBHDmbQ', NULL, '45435-000', 'Brazil', '971-410-3605'),
(6, 'Fancie Kaminski', 'fkaminski5@state.gov', 'f902lO', NULL, NULL, 'China', '651-173-2599'),
(7, 'Gillie Corhard', 'gcorhard6@reference.com', 'mL0UYyUISH', NULL, '31150', 'Thailand', '344-445-4060'),
(8, 'Myrah Mallard', 'mmallard7@jugem.jp', 'h2Lkc3XjDFo', NULL, '730019', 'Colombia', '839-577-1676'),
(9, 'Flori Mattiuzzi', 'fmattiuzzi8@wunderground.com', 'VgNWhI91D', NULL, NULL, 'Kenya', '320-640-5076'),
(10, 'Winifred Frangione', 'wfrangione9@edublogs.org', 'ODF99sGc', NULL, NULL, 'China', '413-191-5936');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brands`
--
ALTER TABLE `brands`
  ADD PRIMARY KEY (`idBrand`);

--
-- Indices de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD PRIMARY KEY (`idCartProduct`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idCart` (`idCart`);

--
-- Indices de la tabla `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`idCart`),
  ADD KEY `idUser` (`idUser`);

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`idCategories`);

--
-- Indices de la tabla `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD PRIMARY KEY (`idCategoryProduct`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idCategories` (`idCategories`);

--
-- Indices de la tabla `colorproduct`
--
ALTER TABLE `colorproduct`
  ADD PRIMARY KEY (`idColorProduct`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idColor` (`idColor`);

--
-- Indices de la tabla `colors`
--
ALTER TABLE `colors`
  ADD PRIMARY KEY (`idColor`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`idProduct`),
  ADD KEY `idBrand` (`idBrand`);

--
-- Indices de la tabla `sizeproduct`
--
ALTER TABLE `sizeproduct`
  ADD PRIMARY KEY (`idSizeProduct`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idSize` (`idSize`);

--
-- Indices de la tabla `sizes`
--
ALTER TABLE `sizes`
  ADD PRIMARY KEY (`idSize`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brands`
--
ALTER TABLE `brands`
  MODIFY `idBrand` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  MODIFY `idCartProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `idCart` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategories` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de la tabla `categoryproduct`
--
ALTER TABLE `categoryproduct`
  MODIFY `idCategoryProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `colorproduct`
--
ALTER TABLE `colorproduct`
  MODIFY `idColorProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `idColor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT de la tabla `sizeproduct`
--
ALTER TABLE `sizeproduct`
  MODIFY `idSizeProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `idSize` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  ADD CONSTRAINT `cartproduct_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`),
  ADD CONSTRAINT `cartproduct_ibfk_2` FOREIGN KEY (`idCart`) REFERENCES `carts` (`idCart`);

--
-- Filtros para la tabla `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idUser`);

--
-- Filtros para la tabla `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD CONSTRAINT `categoryproduct_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`),
  ADD CONSTRAINT `categoryproduct_ibfk_2` FOREIGN KEY (`idCategories`) REFERENCES `categories` (`idCategories`);

--
-- Filtros para la tabla `colorproduct`
--
ALTER TABLE `colorproduct`
  ADD CONSTRAINT `colorproduct_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`),
  ADD CONSTRAINT `colorproduct_ibfk_2` FOREIGN KEY (`idColor`) REFERENCES `colors` (`idColor`);

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`idBrand`) REFERENCES `brands` (`idBrand`);

--
-- Filtros para la tabla `sizeproduct`
--
ALTER TABLE `sizeproduct`
  ADD CONSTRAINT `sizeproduct_ibfk_1` FOREIGN KEY (`idProduct`) REFERENCES `products` (`idProduct`),
  ADD CONSTRAINT `sizeproduct_ibfk_2` FOREIGN KEY (`idSize`) REFERENCES `sizes` (`idSize`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
