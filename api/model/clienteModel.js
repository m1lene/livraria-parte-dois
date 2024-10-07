import mysql from "mysql2/promise";
import {dbConfig} from './db.js';

export const listClientes = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM Clientes";
    const [results] = await connection.query(query);
    console.log('Chamada de metodo do model: listClientes');
    console.log(query);    
    console.log(results);
    return results;
};

export const getClienteById = async(id) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT email_cliente FROM Clientes WHERE id=?";
    const [results] = await connection.query(query,[id]);
    console.log('Chamada de metodo do model: getClienteById');
    console.log(query);
    console.log(results);
    return results
};

export const getClienteByName = async(email) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT id,email_Cliente FROM Clientes WHERE upper(email_Cliente) like upper(?)";
    const [results] = await connection.query(query,'%'+email+'%');
    console.log('Chamada de metodo do model: getClienteByName');
    console.log(query);
    console.log(results);
    return results;
};

export const updateClienteName = async(id, email_Cliente) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE Clientes SET email_cliente=? where id=?";
    await connection.query(query,[email_Cliente,id]);
};

export const removeClienteById = async(id) => {
    const connection = (await mysql.createConnection(dbConfig));
    const query = "DELETE from Clientes WHERE cliente_id_cliente=?";
    await connection.query(query,[id]);
};

export const addCliente = async(data_cadastro_cliente, cpf_cliente,telefone_cliente, email_cliente, senha_cliente) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO cliente(data_cadastro_cliente, cpf_cliente,telefone_cliente, email_cliente, senha_cliente) VALUES(?)";
    console.log('Chamada de metodo do model: addCliente');
    await connection.query(query,[data_cadastro_cliente, cpf_cliente,telefone_cliente, email_cliente, senha_cliente]);
};