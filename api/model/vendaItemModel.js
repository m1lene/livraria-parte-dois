import mysql from "mysql2/promise";
import {dbConfig} from './db.js';

export const listVendaItem = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item";
    const [results] = await connection.query(query);
    console.log('Chamada de método do model: listVendaItem');
    console.log(query);    
    console.log(results);
    return results;
};

export const getVendaItemById = async(id_venda_item) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item WHERE id_venda_item=?";
    const [results] = await connection.query(query, [id_venda_item]);
    console.log('Chamada de método do model: getVendaItemById');
    console.log(query);
    console.log(results);
    return results;
};

export const getVendaItemByLivroId = async(livro_id_livro) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item WHERE livro_id_livro=?";
    const [results] = await connection.query(query, [livro_id_livro]);
    console.log('Chamada de método do model: getVendaItemByLivroId');
    console.log(query);
    console.log(results);
    return results;
};

export const updateVendaItem = async(id_venda_item, quantidade_venda, total_venda) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE venda_item SET quantidade_venda=?, total_venda=? WHERE id_venda_item=?";
    await connection.query(query, [quantidade_venda, total_venda, id_venda_item]);
    console.log('Chamada de método do model: updateVendaItem');
};

export const removeVendaItemById = async(id_venda_item) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "DELETE FROM venda_item WHERE id_venda_item=?";
    await connection.query(query, [id_venda_item]);
    console.log('Chamada de método do model: removeVendaItemById');
};

export const addVendaItem = async(id_venda_item, quantidade_venda, livro_id_livro, total_venda) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO venda_item(id_venda_item, quantidade_venda, livro_id_livro, total_venda) VALUES(?, ?, ?, ?)";
    console.log('Chamada de método do model: addVendaItem');
    await connection.query(query, [id_venda_item, quantidade_venda, livro_id_livro, total_venda]);
};
