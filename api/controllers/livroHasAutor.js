import { db } from "../db.js";

// Obter todos os registros da tabela livro_has_autor
export const getLivroHasAutores = (_, res) => {
  const q = "SELECT * FROM livro_has_autor";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Adicionar um novo registro à tabela livro_has_autor
export const addLivroHasAutor = (req, res) => {
  const q = "INSERT INTO livro_has_autor(`livro_id_livro`, `autor_id_autor`) VALUES(?, ?)";

  const values = [
    req.body.livro_id_livro,
    req.body.autor_id_autor
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro criado com sucesso.");
  });
};

// Atualizar um registro existente na tabela livro_has_autor
export const updateLivroHasAutor = (req, res) => {
  const q = `
    UPDATE livro_has_autor
    SET livro_id_livro = ?, autor_id_autor = ?
    WHERE livro_id_livro = ? AND autor_id_autor = ?
  `;

  const values = [
    req.body.livro_id_livro,
    req.body.autor_id_autor
  ];

  db.query(q, [...values, req.params.livro_id_livro, req.params.autor_id_autor], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro atualizado com sucesso.");
  });
};

// Deletar um registro da tabela livro_has_autor
export const deleteLivroHasAutor = (req, res) => {
  const q = `
    DELETE FROM livro_has_autor
    WHERE livro_id_livro = ? AND autor_id_autor = ?
  `;

  db.query(q, [req.params.livro_id_livro, req.params.autor_id_autor], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro deletado com sucesso.");
  });
};
