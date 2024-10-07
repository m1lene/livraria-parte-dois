import { db } from "../db.js";

export const getEditoras = (_, res) => {
  const q = "SELECT * FROM editora";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addEditora = (req, res) => {
  const q = "INSERT INTO editora(`nome_editora`, `telefone_editora`) VALUES(?)";

  const values = [req.body.nome_editora, req.body.telefone_editora];

  db.query(q, [values], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Editora criada com sucesso.");
  });
};

export const updateEditora = (req, res) => {
  const q = "UPDATE editora SET `nome_editora` = ?, `telefone_editora` = ? WHERE `id_editora` = ?";

  const values = [req.body.nome_editora, req.body.telefone_editora];

  db.query(q, [...values, req.params.id_editora], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Editora atualizada com sucesso.");
  });
};

export const deleteEditora = (req, res) => {
  const q = "DELETE FROM editora WHERE `id_editora` = ?";

  db.query(q, [req.params.id_editora], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Editora deletada com sucesso.");
  });
};
