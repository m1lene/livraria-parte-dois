import mysql from "mysql2/promise"; 
import {dbConfig} from './db.js';

export const listLivroHasAutor = async () => {
    console.log(dbConfig);
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM livro_has_autor";
    const [results] = await connection.query(query);
    console.log('Chamada de método do model: listLivroHasAutor');
    console.log(query);    
    console.log(results);
    return results;
};

export const getLivroHasAutorByLivroId = async(livro_id_livro) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM livro_has_autor WHERE livro_id_livro=?";
    const [results] = await connection.query(query, [livro_id_livro]);
    console.log('Chamada de método do model: getLivroHasAutorByLivroId');
    console.log(query);
    console.log(results);
    return results;
};

export const getLivroHasAutorByAutorId = async(autor_id_autor) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "SELECT * FROM livro_has_autor WHERE autor_id_autor=?";
    const [results] = await connection.query(query, [autor_id_autor]);
    console.log('Chamada de método do model: getLivroHasAutorByAutorId');
    console.log(query);
    console.log(results);
    return results;
};

export const updateLivroHasAutor = async(livro_id_livro, autor_id_autor) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "UPDATE livro_has_autor SET autor_id_autor=? WHERE livro_id_livro=?";
    await connection.query(query, [autor_id_autor, livro_id_livro]);
    console.log('Chamada de método do model: updateLivroHasAutor');
};

export const removeLivroHasAutorByLivroId = async(livro_id_livro) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "DELETE FROM livro_has_autor WHERE livro_id_livro=?";
    await connection.query(query, [livro_id_livro]);
    console.log('Chamada de método do model: removeLivroHasAutorByLivroId');
};

export const addLivroHasAutor = async(livro_id_livro, autor_id_autor) => {
    const connection = await mysql.createConnection(dbConfig);
    const query = "INSERT INTO livro_has_autor(livro_id_livro, autor_id_autor) VALUES(?, ?)";
    await connection.query(query, [livro_id_livro, autor_id_autor]);
    console.log('Chamada de método do model: addLivroHasAutor');
};
