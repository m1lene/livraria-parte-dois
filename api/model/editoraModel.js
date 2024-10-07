import mysql from "mysql2/promise";
import {dbConfig} from './db.js';

export const listEditora = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM Editora";
    const [results] = await connection.query(query);
    console.log('Chamada de metodo do model: listEditora');
    console.log(query);    
    console.log(results);
    return results;
};

export const getEditoraById = async(id) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT nome_editora FROM Editora WHERE id=?";
    const [results] = await connection.query(query,[id]);
    console.log('Chamada de metodo do model: getEditoraById');
    console.log(query);
    console.log(results);
    return results
};

export const getEditoraByName = async(nome) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT id,nome_editora FROM Editora WHERE upper(nome_Editora) like upper(?)";
    const [results] = await connection.query(query,'%'+nome+'%');
    console.log('Chamada de metodo do model: getEditoraByName');
    console.log(query);
    console.log(results);
    return results;
};

export const updateEditoraName = async(id, nome_editora , telefone_editora) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE editora SET telefone_editora=? nome_editora=? where id=?";
    await connection.query(query,[nome_editora,telefone_editora,id]);
};

export const removeEditoraById = async(id) => {
    const connection = (await mysql.createConnection(dbConfig));
    const query = "DELETE from Editora WHERE id_editora=?";
    await connection.query(query,[id]);
};

export const addEditora = async(id_editora, nome_editora, telefone_editora) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO editora(id_editora, nome_editora ,telefone_editora ) VALUES(?)";
    console.log('Chamada de metodo do model: addEditora');
    await connection.query(query,[id_editora, nome_editora, telefone_editora]);
};