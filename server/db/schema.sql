DROP DATABASE IF EXISTS dbName;

CREATE DATABASE dbName;

USE dbName;

CREATE TABLE users (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `email` VARCHAR(100) NOT NULL UNIQUE,
  `thumbnail_url` VARCHAR(255) NULL,
  `name` VARCHAR(50) NOT NULL,
  `description` VARCHAR(255) NULL,
  `street` VARCHAR(255) NOT NULL,
  `city` VARCHAR(50) NOT NULL,
  `state` VARCHAR(20) NOT NULL,
  `country` VARCHAR(20)
);

CREATE TABLE items (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `proposer_id` INT NOT NULL,
  `proposer_device_id` INT NOT NULL,
  `receiver_id` INT NOT NULL,
  `receiver_device_id` INT NOT NULL,
  `status` VARCHAR(16) NOT NULL,
  FOREIGN KEY (`proposer_id`) REFERENCES users (`id`),
  FOREIGN KEY (`proposer_device_id`) REFERENCES devices (`id`),
  FOREIGN KEY (`receiver_id`) REFERENCES users (`id`),
  FOREIGN KEY (`receiver_device_id`) REFERENCES devices (`id`)
);