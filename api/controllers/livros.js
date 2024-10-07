import { db } from "../db.js";

// Obter todos os livros
export const getLivros = (_, res) => {
  const q = "SELECT * FROM livro";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Adicionar um novo livro
export const addLivro = (req, res) => {
  const q = `
    INSERT INTO livro(
      titulo, genero, idioma, edicao_id_edicao, editora_id_editora, quantidade, preco_livro, em_estoque
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    req.body.titulo,
    req.body.genero,
    req.body.idioma,
    req.body.edicao_id_edicao,
    req.body.editora_id_editora,
    req.body.quantidade,
    req.body.preco_livro,
    req.body.em_estoque
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro criado com sucesso.");
  });
};

// Atualizar um livro existente
export const updateLivro = (req, res) => {
  const q = `
    UPDATE livro
    SET titulo = ?, genero = ?, idioma = ?, edicao_id_edicao = ?, editora_id_editora = ?, quantidade = ?, preco_livro = ?, em_estoque = ?
    WHERE id_livro = ?
  `;

  const values = [
    req.body.titulo,
    req.body.genero,
    req.body.idioma,
    req.body.edicao_id_edicao,
    req.body.editora_id_editora,
    req.body.quantidade,
    req.body.preco_livro,
    req.body.em_estoque
  ];

  db.query(q, [...values, req.params.id_livro], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro atualizado com sucesso.");
  });
};

// Deletar um livro
export const deleteLivro = (req, res) => {
  const q = "DELETE FROM livro WHERE id_livro = ?";

  db.query(q, [req.params.id_livro], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Livro deletado com sucesso.");
  });
};
