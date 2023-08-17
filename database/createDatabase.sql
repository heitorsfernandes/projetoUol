CREATE DATABASE IF NOT  EXISTS clients;

USE clients;

CREATE TABLE `Clients` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(255),
    `email` VARCHAR(255),
    `cpf` INT, 
    `telefone` VARCHAR,
    `status` VARCHAR(255),
);

INSERT INTO
    `Clients`
VALUES
    (1, 'Margot Robbie', 'margotrobbie@hotmail.com', '601.463.250-60', '31988887777', 'Desativado');