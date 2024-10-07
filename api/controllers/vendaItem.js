import { db } from "../db.js";

// Obter todos os itens de venda
export const getVendaItems = (_, res) => {
  const q = "SELECT * FROM venda_item";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Adicionar um novo item de venda
export const addVendaItem = (req, res) => {
  const q = `
    INSERT INTO venda_item(
      quantidaded_venda, livro_id_livro, total_venda
    ) VALUES (?, ?, ?)
  `;

  const values = [
    req.body.quantidaded_venda,
    req.body.livro_id_livro,
    req.body.total_venda
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Item de venda criado com sucesso.");
  });
};

// Atualizar um item de venda existente
export const updateVendaItem = (req, res) => {
  const q = `
    UPDATE venda_item
    SET quantidaded_venda = ?, livro_id_livro = ?, total_venda = ?
    WHERE id_venda_item = ?
  `;

  const values = [
    req.body.quantidaded_venda,
    req.body.livro_id_livro,
    req.body.total_venda
  ];

  db.query(q, [...values, req.params.id_venda_item], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Item de venda atualizado com sucesso.");
  });
};

// Deletar um item de venda
export const deleteVendaItem = (req, res) => {
  const q = "DELETE FROM venda_item WHERE id_venda_item = ?";

  db.query(q, [req.params.id_venda_item], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Item de venda deletado com sucesso.");
  });
};
