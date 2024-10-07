DROP TABLE IF EXISTS `venda_item_has_cliente`;
DROP TABLE IF EXISTS `venda_item`;
DROP TABLE IF EXISTS `livro_has_autor`;

DROP TABLE IF EXISTS `autor`;
DROP TABLE IF EXISTS `cliente`;
DROP TABLE IF EXISTS `editora`;
DROP TABLE IF EXISTS `livro`;


CREATE TABLE `autor` (
  `id_autor` int  AUTO_INCREMENT,
  `nome_autor` varchar(45) ,
  PRIMARY KEY (`id_autor`)
);

INSERT INTO `autor` VALUES (1,'clarice lispector');


CREATE TABLE `cliente` (
  `cliente_id_cliente` int AUTO_INCREMENT ,
  `data_cadastro_cliente` date ,
  `cpf_cliente` int ,
  `telefone_cliente` varchar(10) ,
  `email_cliente` varchar(45) ,
  `senha_cliente` varchar(15) ,
  PRIMARY KEY (`cliente_id_cliente`)
);

CREATE TABLE editora (
  `id_editora` int  AUTO_INCREMENT,
  `nome_editora` varchar(45) ,
  `telefone_editora` varchar(45) ,
  PRIMARY KEY (`id_editora`)
);

CREATE TABLE livro (
  `id_livro` int  AUTO_INCREMENT,
  `titulo` varchar(50) ,
  `genero` varchar(45) ,
  `idioma` varchar(45) ,
  `edicao_id_edicao` int ,
  `editora_id_editora` int ,
  `quantidade` int ,
  `preco_livro` double ,
  `em_estoque` tinyint ,
  PRIMARY KEY (`id_livro`),
  KEY `fk_livro_editora1_idx` (`editora_id_editora`),
  CONSTRAINT `fk_livro_editora1` FOREIGN KEY (`editora_id_editora`) REFERENCES `editora` (`id_editora`)
);

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda_item` (
  `id_venda_item` int ,
  `quantidade_venda` int ,
  `livro_id_livro` int ,
  `total_venda` double ,
  PRIMARY KEY (`id_venda_item`),
  KEY `fk_venda_item_livro1_idx` (`livro_id_livro`),
  CONSTRAINT `fk_venda_item_livro1` FOREIGN KEY (`livro_id_livro`) REFERENCES `livro` (`id_livro`)
);

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `livro_has_autor` (
  `livro_id_livro` int ,
  `autor_id_autor` int ,
  PRIMARY KEY (`livro_id_livro`,`autor_id_autor`),
  KEY `fk_livro_has_table1_table11_idx` (`autor_id_autor`),
  KEY `fk_livro_has_table1_livro_idx` (`livro_id_livro`),
  CONSTRAINT `fk_livro_has_table1_livro` FOREIGN KEY (`livro_id_livro`) REFERENCES `livro` (`id_livro`),
  CONSTRAINT `fk_livro_has_table1_table11` FOREIGN KEY (`autor_id_autor`) REFERENCES `autor` (`id_autor`)
);

/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venda_item_has_cliente` (
  `venda_item_id_venda_item` int ,
  `cliente_pessoa_email_pessoa` varchar(45) ,
  `data_venda` date ,
  PRIMARY KEY (`venda_item_id_venda_item`,`cliente_pessoa_email_pessoa`),
  KEY `fk_venda_item_has_cliente_venda_item1_idx` (`venda_item_id_venda_item`),
  KEY `fk_venda_item_has_cliente_cliente1_idx` (`cliente_pessoa_email_pessoa`),
  CONSTRAINT `fk_venda_item_has_cliente_cliente1` FOREIGN KEY (`cliente_pessoa_email_pessoa`) REFERENCES `cliente` (`cliente_id_cliente`),
  CONSTRAINT `fk_venda_item_has_cliente_venda_item1` FOREIGN KEY (`venda_item_id_venda_item`) REFERENCES `venda_item` (`id_venda_item`)
);


