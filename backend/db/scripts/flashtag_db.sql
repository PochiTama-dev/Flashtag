-- phpMyAdmin SQL Dump
-- version 5.2.2-1.fc41
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-03-2025 a las 16:21:09
-- Versión del servidor: 10.11.10-MariaDB
-- Versión de PHP: 8.3.17

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
  `id` int(11) NOT NULL,
  `id_qr_type` int(11) NOT NULL,
  `id_qr_tag` int(11) NOT NULL,
  `id_product` int(11) DEFAULT NULL,
  `id_analytics` text DEFAULT NULL,
  `id_template` int(11) DEFAULT NULL,
  `id_social_network` int(11) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `border` varchar(50) DEFAULT NULL,
  `color` varchar(50) DEFAULT NULL,
  `smooth` varchar(50) DEFAULT NULL,
  `url` text NOT NULL,
  `code` text NOT NULL,
  `social_network_code` text NOT NULL,
  `scan_limit` int(11) NOT NULL DEFAULT 0,
  `image` text NOT NULL,
  `data` varchar(500) NOT NULL,
  `isUsed` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `qr_codes`
--

INSERT INTO `qr_codes` (`id`, `id_qr_type`, `id_qr_tag`, `id_product`, `id_analytics`, `id_template`, `id_social_network`, `created_at`, `updated_at`, `border`, `color`, `smooth`, `url`, `code`, `social_network_code`, `scan_limit`, `image`, `data`, `isUsed`) VALUES
(1, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:02:35', '2025-03-06 15:02:35', NULL, '#000000', 'square', '', 'QKHGKBHKVMK', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/1', 0),
(2, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:02:35', '2025-03-06 15:02:35', NULL, '#000000', 'square', '', 'FHFNRVDWRRC', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/2', 0),
(3, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:02:35', '2025-03-06 15:02:35', NULL, '#000000', 'square', '', 'VURZKQTCZMP', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/3', 0),
(4, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:58:35', '2025-03-06 15:58:35', NULL, '#000000', 'extra-rounded', '', 'VQXTSADPAKJ', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/4', 0),
(5, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:58:35', '2025-03-06 15:58:35', NULL, '#000000', 'extra-rounded', '', 'XTKBTKDZAMO', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/5', 0),
(6, 1, 4, NULL, NULL, NULL, NULL, '2025-03-06 15:58:35', '2025-03-06 15:58:35', NULL, '#000000', 'extra-rounded', '', 'YVLCOLBHOGF', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/6', 0),
(7, 3, 5, NULL, NULL, NULL, NULL, '2025-03-07 21:08:39', '2025-03-07 21:08:39', NULL, '#000000', 'square', '', 'CCRFODKDXJA', 'exampleSocialNetworkCode', 0, 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg', 'WIFI:S:fdghdfgh;T:WEP;P:dfghdfgh;;', 0),
(8, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'AOWNZBRTJZR', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/8', 0),
(9, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'BEOAVSATMYH', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/9', 0),
(10, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'KLAULNIBXNO', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/10', 0),
(11, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'MDWVGXOCQAK', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/11', 0),
(12, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'ZKPWRVWOKXX', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/12', 0),
(13, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'QNETQTLVRIZ', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/13', 0),
(14, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'EHPZSZPIZRZ', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/14', 0),
(15, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'VBUWLOWKANH', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/15', 0),
(16, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'NCIQSXWGRWQ', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/16', 0),
(17, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'YXBRWKNVXVP', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/17', 0),
(18, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'JIODGEBXCIE', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/18', 0),
(19, 1, 4, NULL, NULL, NULL, NULL, '2025-03-07 21:10:37', '2025-03-07 21:10:37', NULL, '#000000', 'square', '', 'BLBXTUQBPUD', 'exampleSocialNetworkCode', 0, '', 'http://192.168.1.60:8006/redirect_resources/19', 0);

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
(3, 'Wifi'),
(4, 'Sin Asignar');

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
  `id` varchar(500) NOT NULL,
  `id_qr_code` varchar(500) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `ssid` text NOT NULL,
  `encryption` text NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `wifi`
--

INSERT INTO `wifi` (`id`, `id_qr_code`, `created_at`, `updated_at`, `ssid`, `encryption`, `password`) VALUES
('WIFI:S:aaaaaaaa;T:WEP;P:aaaaaaaaa;;', '43', '2025-03-06 12:59:55', '2025-03-06 12:59:55', 'aaaaaaaa', 'WEP', 'U2FsdGVkX1/ApL2chrPz1M0noL1XzpIdGy4t7FVp79c='),
('WIFI:S:asdasd;T:WPA2;P:ghjfhjfghj;;', '42', '2025-03-06 12:58:35', '2025-03-06 12:58:35', 'asdasd', 'WPA2', 'U2FsdGVkX18rsqJK+38iPxlIizC6aPVrcw4Hq/Mwid0='),
('WIFI:S:fdghdfgh;T:WEP;P:dfghdfgh;;', '7', '2025-03-07 21:08:39', '2025-03-07 21:08:39', 'fdghdfgh', 'WEP', 'U2FsdGVkX199wnsy/jefdp4k9Bkd3pLMkChMKPZ2wQc='),
('WIFI:S:wifi;T:asdasda;P:1212312312;;', '40', '2025-03-06 12:27:59', '2025-03-06 12:27:59', 'wifi', 'asdasda', 'U2FsdGVkX1+/+mMJTXe7BkFQRXyCXqfWwH6BAisjavk=');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
