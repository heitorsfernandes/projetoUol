CREATE DATABASE IF NOT  EXISTS Store;

USE Store;

CREATE TABLE `clients` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    `email` VARCHAR(255),
    `cpf` VARCHAR(11), 
    `phone` VARCHAR(15),
    `status` VARCHAR(255),
    PRIMARY KEY (`id`)
);

INSERT INTO
    `clients`
VALUES
    (1, 'Margot Robbie', 'margotrobbie@hotmail.com', '60146325060', '31988887777', 'Desativado');