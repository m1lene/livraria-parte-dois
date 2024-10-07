import mysql from "mysql2/promise";
import {dbConfig} from './db.js';

export const listVendaItemHasCliente = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item_has_cliente";
    const [results] = await connection.query(query);
    console.log('Chamada de método do model: listVendaItemHasCliente');
    console.log(query);    
    console.log(results);
    return results;
};

export const getVendaItemHasClienteByVendaItemId = async(venda_item_id_venda_item) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item_has_cliente WHERE venda_item_id_venda_item=?";
    const [results] = await connection.query(query, [venda_item_id_venda_item]);
    console.log('Chamada de método do model: getVendaItemHasClienteByVendaItemId');
    console.log(query);
    console.log(results);
    return results;
};

export const getVendaItemHasClienteByClienteEmail = async(cliente_pessoa_email_pessoa) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM venda_item_has_cliente WHERE cliente_pessoa_email_pessoa=?";
    const [results] = await connection.query(query, [cliente_pessoa_email_pessoa]);
    console.log('Chamada de método do model: getVendaItemHasClienteByClienteEmail');
    console.log(query);
    console.log(results);
    return results;
};

export const updateVendaItemHasCliente = async(venda_item_id_venda_item, cliente_pessoa_email_pessoa, data_venda) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE venda_item_has_cliente SET cliente_pessoa_email_pessoa=?, data_venda=? WHERE venda_item_id_venda_item=?";
    await connection.query(query, [cliente_pessoa_email_pessoa, data_venda, venda_item_id_venda_item]);
    console.log('Chamada de método do model: updateVendaItemHasCliente');
};

export const removeVendaItemHasClienteByVendaItemId = async(venda_item_id_venda_item) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "DELETE FROM venda_item_has_cliente WHERE venda_item_id_venda_item=?";
    await connection.query(query, [venda_item_id_venda_item]);
    console.log('Chamada de método do model: removeVendaItemHasClienteByVendaItemId');
};

export const addVendaItemHasCliente = async(venda_item_id_venda_item, cliente_pessoa_email_pessoa, data_venda) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO venda_item_has_cliente(venda_item_id_venda_item, cliente_pessoa_email_pessoa, data_venda) VALUES(?, ?, ?)";
    console.log('Chamada de método do model: addVendaItemHasCliente');
    await connection.query(query, [venda_item_id_venda_item, cliente_pessoa_email_pessoa, data_venda]);
};
