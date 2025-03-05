-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-02-2025 a las 02:10:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `flashtag_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `coupons`
--

CREATE TABLE `coupons` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `code` text DEFAULT NULL,
  `discount` decimal(5,2) NOT NULL,
  `valid_from` datetime NOT NULL,
  `valid_to` datetime NOT NULL,
  `active` tinyint(4) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `comment` text NOT NULL,
  `stars` smallint(6) NOT NULL,
  `avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `link_list`
--

CREATE TABLE `link_list` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `link` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `loyalty_cards`
--

CREATE TABLE `loyalty_cards` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `title` varchar(50) NOT NULL,
  `reward_condition` text NOT NULL,
  `reward_description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `price` decimal(7,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qr_analytics`
--

CREATE TABLE `qr_analytics` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `device` text NOT NULL,
  `browser` text NOT NULL,
  `operating_system` text NOT NULL,
  `location` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qr_codes`
--

CREATE TABLE `qr_codes` (
  `id` varchar(500) NOT NULL,
  `id_qr_type` int(11) NOT NULL,
  `id_qr_tag` int(11) NOT NULL,
  `id_product` int(11) NOT NULL,
  `id_analytics` text DEFAULT NULL,
  `id_template` int(11) DEFAULT NULL,
  `id_social_network` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `border` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `smooth` varchar(50) DEFAULT NULL,
  `url` text NOT NULL,
  `code` text NOT NULL,
  `social_network_code` text NOT NULL,
  `scan_limit` int(11) NOT NULL DEFAULT 0,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qr_tags`
--

CREATE TABLE `qr_tags` (
  `id` int(11) NOT NULL,
  `label` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `qr_tags`
--

INSERT INTO `qr_tags` (`id`, `label`) VALUES
(1, 'Cupón'),
(2, 'Feedback'),
(3, 'Listado de Enlaces'),
(4, 'Ruleta'),
(5, 'Página Web'),
(6, 'Tarjeta de Fidelidad'),
(7, 'Vcard Plus'),
(8, 'Cartel Google'),
(9, 'Cartel WhatsApp'),
(10, 'Cartel Tripadvisor'),
(11, 'Cartel Facebook'),
(12, 'Cartel Instagram'),
(13, 'Cartel Brubank'),
(14, 'Cartel TikTok'),
(15, 'Cartel Menú'),
(16, 'Tarjeta de Google'),
(17, 'Tarjeta de WhatsApp'),
(18, 'Tarjeta de Instagram'),
(19, 'Tarjeta de TikTok'),
(20, 'Stickers Google'),
(21, 'Stickers Instagram'),
(22, 'Stickers WhatsApp'),
(23, 'Stickers Sitio Web'),
(24, 'Stickers Menú'),
(25, 'Stickers Tripadvisor'),
(26, 'Stickers TikTok'),
(27, 'DOME Google'),
(28, 'DOME Instagram'),
(29, 'DOME Menú'),
(30, 'Cartel de Google (20X10)'),
(31, 'Cartel Menú (7X7)');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `qr_types`
--

CREATE TABLE `qr_types` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `qr_types`
--

INSERT INTO `qr_types` (`id`, `name`) VALUES
(1, 'Link'),
(2, 'NFC'),
(3, 'Wifi');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `fullname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `comment` text NOT NULL,
  `stars` smallint(6) NOT NULL,
  `avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `name` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'Administrador'),
(2, 'Cliente'),
(3, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roulettes`
--

CREATE TABLE `roulettes` (
  `id` int(11) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roulette_configs`
--

CREATE TABLE `roulette_configs` (
  `id` int(11) NOT NULL,
  `id_roulette` int(11) NOT NULL,
  `reward` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `probability` smallint(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `social_networks`
--

CREATE TABLE `social_networks` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `social_networks`
--

INSERT INTO `social_networks` (`id`, `name`) VALUES
(1, 'Facebook'),
(2, 'Instagram'),
(3, 'Whatsapp');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `subscriptions`
--

CREATE TABLE `subscriptions` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `days_validity` smallint(6) NOT NULL,
  `price` decimal(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `subscriptions`
--

INSERT INTO `subscriptions` (`id`, `name`, `days_validity`, `price`) VALUES
(1, 'Gratuita', 14, 0.00),
(2, 'Mensual Advance', 30, 39.99),
(3, 'Mensual Starter', 30, 39.99),
(4, 'Anual Advance', 365, 99.99),
(5, 'Anual Starter', 365, 99.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `templates`
--

CREATE TABLE `templates` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `image` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `company` varchar(50) NOT NULL,
  `cuit_cuil` varchar(12) NOT NULL,
  `fullname` varchar(50) NOT NULL,
  `dni` int(11) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL,
  `avatar` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users_subscriptions`
--

CREATE TABLE `users_subscriptions` (
  `id` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_subscription` int(11) NOT NULL,
  `valid_from` datetime NOT NULL,
  `valid_to` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wifi`
--

CREATE TABLE `wifi` (
  `id` varchar(100) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ssid` text NOT NULL,
  `encryption` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `coupons`
--
ALTER TABLE `coupons`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id_qr_code_2` (`id_qr_code`),
  ADD UNIQUE KEY `code` (`code`) USING HASH,
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `link_list`
--
ALTER TABLE `link_list`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `loyalty_cards`
--
ALTER TABLE `loyalty_cards`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `qr_analytics`
--
ALTER TABLE `qr_analytics`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `qr_codes`
--
ALTER TABLE `qr_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_type` (`id_qr_type`),
  ADD KEY `id_qr_tag` (`id_qr_tag`),
  ADD KEY `id_product` (`id_product`),
  ADD KEY `id_template` (`id_template`),
  ADD KEY `id_social_network` (`id_social_network`);

--
-- Indices de la tabla `qr_tags`
--
ALTER TABLE `qr_tags`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `qr_types`
--
ALTER TABLE `qr_types`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roulettes`
--
ALTER TABLE `roulettes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- Indices de la tabla `roulette_configs`
--
ALTER TABLE `roulette_configs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_roulette` (`id_roulette`);

--
-- Indices de la tabla `social_networks`
--
ALTER TABLE `social_networks`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `templates`
--
ALTER TABLE `templates`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `id_role` (`id_role`);

--
-- Indices de la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_subscription` (`id_subscription`);

--
-- Indices de la tabla `wifi`
--
ALTER TABLE `wifi`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_qr_code` (`id_qr_code`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `coupons`
--
ALTER TABLE `coupons`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `link_list`
--
ALTER TABLE `link_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `loyalty_cards`
--
ALTER TABLE `loyalty_cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `qr_analytics`
--
ALTER TABLE `qr_analytics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `qr_tags`
--
ALTER TABLE `qr_tags`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `qr_types`
--
ALTER TABLE `qr_types`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `roulettes`
--
ALTER TABLE `roulettes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `roulette_configs`
--
ALTER TABLE `roulette_configs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `social_networks`
--
ALTER TABLE `social_networks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `subscriptions`
--
ALTER TABLE `subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `templates`
--
ALTER TABLE `templates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `coupons`
--
ALTER TABLE `coupons`
  ADD CONSTRAINT `coupons_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD CONSTRAINT `feedbacks_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `link_list`
--
ALTER TABLE `link_list`
  ADD CONSTRAINT `link_list_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `loyalty_cards`
--
ALTER TABLE `loyalty_cards`
  ADD CONSTRAINT `loyalty_cards_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `qr_analytics`
--
ALTER TABLE `qr_analytics`
  ADD CONSTRAINT `qr_analytics_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `qr_codes`
--
ALTER TABLE `qr_codes`
  ADD CONSTRAINT `qr_codes_ibfk_1` FOREIGN KEY (`id_qr_type`) REFERENCES `qr_types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qr_codes_ibfk_2` FOREIGN KEY (`id_qr_tag`) REFERENCES `qr_tags` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qr_codes_ibfk_3` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qr_codes_ibfk_4` FOREIGN KEY (`id_template`) REFERENCES `templates` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `qr_codes_ibfk_5` FOREIGN KEY (`id_social_network`) REFERENCES `social_networks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `reviews`
--
ALTER TABLE `reviews`
  ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `roulettes`
--
ALTER TABLE `roulettes`
  ADD CONSTRAINT `roulettes_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `roulette_configs`
--
ALTER TABLE `roulette_configs`
  ADD CONSTRAINT `roulette_configs_ibfk_1` FOREIGN KEY (`id_roulette`) REFERENCES `roulettes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `templates`
--
ALTER TABLE `templates`
  ADD CONSTRAINT `templates_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`id_role`) REFERENCES `roles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `users_subscriptions`
--
ALTER TABLE `users_subscriptions`
  ADD CONSTRAINT `users_subscriptions_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `users_subscriptions_ibfk_2` FOREIGN KEY (`id_subscription`) REFERENCES `subscriptions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `wifi`
--
ALTER TABLE `wifi`
  ADD CONSTRAINT `wifi_ibfk_1` FOREIGN KEY (`id_qr_code`) REFERENCES `qr_codes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
