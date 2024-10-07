import { db } from "../db.js";

// Obter todos os registros de venda_item_has_cliente
export const getVendaItemHasClientes = (_, res) => {
  const q = "SELECT * FROM venda_item_has_cliente";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Adicionar um novo registro de venda_item_has_cliente
export const addVendaItemHasCliente = (req, res) => {
  const q = `
    INSERT INTO venda_item_has_cliente(
      venda_item_id_venda_item, cliente_pessoa_email_pessoa, data_venda
    ) VALUES (?, ?, ?)
  `;

  const values = [
    req.body.venda_item_id_venda_item,
    req.body.cliente_pessoa_email_pessoa,
    req.body.data_venda
  ];

  db.query(q, values, (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro criado com sucesso.");
  });
};

// Atualizar um registro de venda_item_has_cliente existente
export const updateVendaItemHasCliente = (req, res) => {
  const q = `
    UPDATE venda_item_has_cliente
    SET venda_item_id_venda_item = ?, cliente_pessoa_email_pessoa = ?, data_venda = ?
    WHERE venda_item_id_venda_item = ? AND cliente_pessoa_email_pessoa = ?
  `;

  const values = [
    req.body.venda_item_id_venda_item,
    req.body.cliente_pessoa_email_pessoa,
    req.body.data_venda
  ];

  db.query(q, [...values, req.params.venda_item_id_venda_item, req.params.cliente_pessoa_email_pessoa], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro atualizado com sucesso.");
  });
};

// Deletar um registro de venda_item_has_cliente
export const deleteVendaItemHasCliente = (req, res) => {
  const q = `
    DELETE FROM venda_item_has_cliente
    WHERE venda_item_id_venda_item = ? AND cliente_pessoa_email_pessoa = ?
  `;

  db.query(q, [req.params.venda_item_id_venda_item, req.params.cliente_pessoa_email_pessoa], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Registro deletado com sucesso.");
  });
};
