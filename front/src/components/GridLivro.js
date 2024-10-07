import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;

const Grid = ({ livros, setLivros, setOnEdit }) => {
  const handleEdit = (item) => {
    setOnEdit(item);
  };
  
  const handleDelete = async (id_livro) => {
    await axios
      .delete("http://localhost:8800/livros/" + id_livro)
      .then(({ data }) => {
        const newArray = livros.filter((livro) => livro.id_livro !== id_livro);

        setLivros(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    setOnEdit(null);
  };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID Livro</Th>
          <Th>Título</Th>
          <Th>Gênero</Th>
          <Th>Idioma</Th>
          <Th>Quantidade</Th>
          <Th>Preço</Th>
          <Th>Em Estoque</Th>
          <Th></Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {livros.map((item, i) => (
          <Tr key={i}>
            <Td width="10%">{item.id_livro}</Td>
            <Td width="20%">{item.titulo}</Td>
            <Td width="10%">{item.genero}</Td>
            <Td width="15%">{item.idioma}</Td>
            <Td width="15%">{item.quantidade}</Td>
            <Td width="10%">{item.preco_livro}</Td>
            <Td width="15%">{item.em_estoque}</Td>
            <Td alignCenter width="5%">
              <FaEdit onClick={() => handleEdit(item)} />
            </Td>
            <Td alignCenter width="5%">
              <FaTrash onClick={() => handleDelete(item.id_livro)} />
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;
