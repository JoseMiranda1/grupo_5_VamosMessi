CREATE DATABASE IF NOT EXISTS laSabanadb2;
USE laSabanadb2;
-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-03-2022 a las 20:04:14
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
-- Base de datos: `lasabanadb2`
--

use lasabanadb2;
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
(1, 'Arredo'),
(2, 'Divanlito'),
(3, 'La Cardeuse'),
(4, 'laSabana'),
(5, 'Canon');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cartproduct`
--

CREATE TABLE `cartproduct` (
  `id` int(10) UNSIGNED NOT NULL,
  `productPrice` decimal(18,2) DEFAULT NULL,
  `quantity` int(10) UNSIGNED DEFAULT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idCart` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cartproduct`
--

INSERT INTO `cartproduct` (`id`, `productPrice`, `quantity`, `idProduct`, `idCart`) VALUES
(1, '3000.00', 1, 1, 1),
(2, '10000.00', 1, 2, 2),
(3, '4000.00', 2, 4, 3),
(4, '3000.00', 3, 5, 4),
(5, '2000.00', 4, 3, 5);

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
(4, 1),
(3, 2),
(5, 3),
(1, 4),
(2, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `idCategory` int(10) UNSIGNED NOT NULL,
  `typeOfCategory` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`idCategory`, `typeOfCategory`) VALUES
(1, 'Sabanas'),
(2, 'Colchones'),
(3, 'Toallas'),
(4, 'Almohadas'),
(5, 'Batas');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoryproduct`
--

CREATE TABLE `categoryproduct` (
  `id` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idCategories` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoryproduct`
--

INSERT INTO `categoryproduct` (`id`, `idProduct`, `idCategories`) VALUES
(1, 1, 1),
(2, 2, 2),
(3, 3, 3),
(4, 4, 5),
(5, 5, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `colorproduct`
--

CREATE TABLE `colorproduct` (
  `id` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idColor` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `colorproduct`
--

INSERT INTO `colorproduct` (`id`, `idProduct`, `idColor`) VALUES
(1, 1, 1),
(6, 2, 3),
(11, 3, 4),
(16, 4, 2),
(21, 5, 3);

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
(1, 'Sin color'),
(2, 'Violeta'),
(3, 'Gris'),
(4, 'Verde'),
(5, 'Amarillo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `idProduct` int(10) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `price` decimal(18,2) DEFAULT NULL,
  `image` varchar(200) DEFAULT NULL,
  `description` varchar(2000) DEFAULT NULL,
  `stock` int(11) NOT NULL,
  `idBrand` int(10) UNSIGNED DEFAULT NULL,
  `createDate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`idProduct`, `name`, `price`, `image`,`description`, `stock`, `idBrand`, `createDate`) VALUES
(1, 'sabanas', '3000.00', '/grupo_5_VamosMessi/public/imagenes/productos/Sabanas-imgB.jpg','descripcion uno',5, 5, '2021-11-23'),
(2, 'colchon', '10000.00', '/grupo_5_VamosMessi/public/imagenes/productos/colchon.jpg', 'descripcion dos',5, 4, '2021-10-20'),
(3, 'toallas', '500.00', '/grupo_5_VamosMessi/public/imagenes/productos/toallas.jpg', 'descripcion tres',5, 3, '2019-10-21'),
(4, 'bata', '2000.00', '/grupo_5_VamosMessi/public/imagenes/productos/bata-clasica-dos-costuras-800x800.jpg' ,'descripcion 4',5, 2, '2020-10-28'),
(5, 'almohada', '1000.00', '/grupo_5_VamosMessi/public/imagenes/productos/Almohada-inspira-imgD.jpg','descripcion 5', 5, 1, '2022-01-18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sizeproduct`
--

CREATE TABLE `sizeproduct` (
  `id` int(10) UNSIGNED NOT NULL,
  `idProduct` int(10) UNSIGNED DEFAULT NULL,
  `idSize` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sizeproduct`
--

INSERT INTO `sizeproduct` (`id`, `idProduct`, `idSize`) VALUES
(1, 1, 1),
(8, 2, 5),
(12, 3, 8),
(14, 4, 9),
(16, 5, 8);

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
(1, 'Cuna'),
(2, 'Cuna funcional'),
(3, '1 Plaza'),
(4, 'Queen Size'),
(5, 'Extra Queen Size'),
(6, 'King Size'),
(7, 'Extra King Size'),
(8, 'No Size'),
(9, 'Medium'),
(10, 'Large');

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
  `phone` varchar(50) DEFAULT NULL,
  `birthdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`idUser`, `userName`, `email`, `userPassword`, `adress`, `postCode`, `country`, `phone`,`birthdate`) VALUES
(1, 'Mati', 'correo@gmail.com', 'clave1', calle1, '7600', 'Argentina', '436-397-9111', '1990-08-08'),
(2, 'Jose', 'correo2@gmail.com', 'clave2', calle2, '2700', 'Uruguay', '436-397-9111', '1990-08-08'),
(3, 'Ro', 'correo3@gmail.com', 'clave3', calle3, '8300', 'Colombia', '436-397-9111', '1990-08-08'),
(4, 'Cosme', 'correo4@gmail.com', 'clave4', calle4, '1500', 'Bolivia', '436-397-9111', '1990-08-08'),
(5, 'Fulanito', 'correo5@gmail.com', 'clave5', calle5, '5005', 'Paraguay', '436-397-9111', '1990-08-08');

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
  ADD PRIMARY KEY (`id`),
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
  ADD PRIMARY KEY (`idCategory`);

--
-- Indices de la tabla `categoryproduct`
--
ALTER TABLE `categoryproduct`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProduct` (`idProduct`),
  ADD KEY `idCategories` (`idCategories`);

--
-- Indices de la tabla `colorproduct`
--
ALTER TABLE `colorproduct`
  ADD PRIMARY KEY (`id`),
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
  ADD PRIMARY KEY (`id`),
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
  MODIFY `idBrand` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `cartproduct`
--
ALTER TABLE `cartproduct`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `carts`
--
ALTER TABLE `carts`
  MODIFY `idCart` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `idCategory` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categoryproduct`
--
ALTER TABLE `categoryproduct`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `colorproduct`
--
ALTER TABLE `colorproduct`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `colors`
--
ALTER TABLE `colors`
  MODIFY `idColor` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `idProduct` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `sizeproduct`
--
ALTER TABLE `sizeproduct`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `sizes`
--
ALTER TABLE `sizes`
  MODIFY `idSize` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `idUser` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
  ADD CONSTRAINT `categoryproduct_ibfk_2` FOREIGN KEY (`idCategories`) REFERENCES `categories` (`idCategory`);

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
