import mysql from "mysql2/promise";
import {dbConfig} from './db.js';

export const listAutor = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM Autor";
    const [results] = await connection.query(query);
    console.log('Chamada de metodo do model: listAutor');
    console.log(query);    
    console.log(results);
    return results;
};

export const getAutorById = async(id) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT nome_autor FROM Autor WHERE id=?";
    const [results] = await connection.query(query,[id]);
    console.log('Chamada de metodo do model: getAutorById');
    console.log(query);
    console.log(results);
    return results
};

export const getAutorByName = async(nome) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT id,nome_autor FROM Autor WHERE upper(nome_Autor) like upper(?)";
    const [results] = await connection.query(query,'%'+nome+'%');
    console.log('Chamada de metodo do model: getAutorByName');
    console.log(query);
    console.log(results);
    return results;
};

export const updateAutorName = async(id, nome_Autor) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE Autor SET nome_autor=? where id=?";
    await connection.query(query,[nome_Autor,id]);
};

export const removeAutorById = async(id) => {
    const connection = (await mysql.createConnection(dbConfig));
    const query = "DELETE from Autor WHERE id_autor=?";
    await connection.query(query,[id]);
};

export const addAutor = async(id_autor, nome_autor) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO autor(id_autor, nome_autor) VALUES(?)";
    console.log('Chamada de metodo do model: addAutor');
    await connection.query(query,[id_autor, nome_autor]);
};