import { db } from "../db.js";

export const getAuthors = (_, res) => {
  const q = "SELECT * FROM autor";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addAuthor = (req, res) => {
  const q = "INSERT INTO autor(`nome_autor`) VALUES(?)";

  const values = [req.body.nome_autor];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Autor criado com sucesso.");
  });
};

export const updateAuthor = (req, res) => {
  const q = "UPDATE autor SET `nome_autor` = ? WHERE `id_autor` = ?";

  const values = [req.body.nome_autor];

  db.query(q, [...values, req.params.id_autor], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Autor atualizado com sucesso.");
  });
};

export const deleteAuthor = (req, res) => {
  const q = "DELETE FROM autor WHERE `id_autor` = ?";

  db.query(q, [req.params.id_autor], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Autor deletado com sucesso.");
  });
};
