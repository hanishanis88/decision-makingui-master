-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Oct 16, 2022 at 03:40 AM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `decision_making`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `project_name` text NOT NULL,
  `email` text NOT NULL,
  `position` text NOT NULL,
  `testing_technique` text NOT NULL,
  `tools_name` text,
  `project_result` text NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `project_name`, `email`, `position`, `testing_technique`, `tools_name`, `project_result`, `created`) VALUES
(1, 'test01', 'user01@test.com', 'Test Engineer', 'Manual Testing', NULL, 'Manual Testing', '2022-10-16 02:58:24'),
(2, 'test02', 'user02@test.com', 'software engineer', 'Hybrid Testing(using both manual and automated testing)', '', 'Automated Testing', '2022-10-15 19:11:57'),
(3, 'test02', 'user02@test.com', 'software engineer', 'Hybrid Testing(using both manual and automated testing)', '', 'Automated Testing', '2022-10-15 19:11:58'),
(4, 'test02', 'user02@test.com', 'Test Engineer', 'Automated Testing', 'test', 'Automated Testing', '2022-10-15 19:12:50'),
(5, 'testAPI01', 'test123@gmail.com', 'Test Analyst', 'Automatic Testing', 'Automatic Testing', 'Automated Testing', '2022-10-15 19:29:13'),
(6, 'testAPI01', 'test123@gmail.com', 'Test Analyst', 'Automatic Testing', 'Automatic Testing', 'Manual Testing', '2022-10-15 19:29:13'),
(7, 'TESTAPI03', 'test12345@gmail.com', 'Product Manager', 'Hybrid Testing(using both manual and automated testing)', 'Hybrid Testing(using both manual and automated testing)', 'Manual Testing', '2022-10-15 19:31:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
