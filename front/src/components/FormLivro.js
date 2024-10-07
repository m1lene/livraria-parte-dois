import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 200px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getLivro, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const livro = ref.current;

      livro.id_livro.value = onEdit.id_livro;
      livro.titulo.value = onEdit.titulo;
      livro.genero.value = onEdit.genero;
      livro.idioma.value = onEdit.idioma;
      livro.edicao_id_edicao.value = onEdit.edicao_id_edicao;
      livro.editora_id_editora.value = onEdit.editora_id_editora;
      livro.quantidade.value = onEdit.quantidade;
      livro.preco_livro.value = onEdit.preco_livro;
      livro.em_estoque.value = onEdit.em_estoque;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const livro = ref.current;

    if (
      !livro.id_livro.value ||
      !livro.titulo.value ||
      !livro.genero.value ||
      !livro.idioma.value ||
      !livro.edicao_id_edicao.value ||
      !livro.editora_id_editora.value ||
      !livro.quantidade.value ||
      !livro.preco_livro.value ||
      !livro.em_estoque.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/livros/" + onEdit.id_livro, {
          id_livro: livro.id_livro.value,
          titulo: livro.titulo.value,
          genero: livro.genero.value,
          idioma: livro.idioma.value,
          edicao_id_edicao: livro.edicao_id_edicao.value,
          editora_id_editora: livro.editora_id_editora.value,
          quantidade: livro.quantidade.value,
          preco_livro: livro.preco_livro.value,
          em_estoque: livro.em_estoque.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/livros", {
          id_livro: livro.id_livro.value,
          titulo: livro.titulo.value,
          genero: livro.genero.value,
          idioma: livro.idioma.value,
          edicao_id_edicao: livro.edicao_id_edicao.value,
          editora_id_editora: livro.editora_id_editora.value,
          quantidade: livro.quantidade.value,
          preco_livro: livro.preco_livro.value,
          em_estoque: livro.em_estoque.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    livro.id_livro.value = "";
    livro.titulo.value = "";
    livro.genero.value = "";
    livro.idioma.value = "";
    livro.edicao_id_edicao.value = "";
    livro.editora_id_editora.value = "";
    livro.quantidade.value = "";
    livro.preco_livro.value = "";
    livro.em_estoque.value = "";

    setOnEdit(null);
    getLivro();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>ID Livro</Label>
        <Input name="id_livro" type="text" />
      </InputArea>
      <InputArea>
        <Label>Título</Label>
        <Input name="titulo" type="text" />
      </InputArea>
      <InputArea>
        <Label>Gênero</Label>
        <Input name="genero" type="text" />
      </InputArea>
      <InputArea>
        <Label>Idioma</Label>
        <Input name="idioma" type="text" />
      </InputArea>
      <InputArea>
        <Label>ID Edição</Label>
        <Input name="edicao_id_edicao" type="text" />
      </InputArea>
      <InputArea>
        <Label>ID Editora</Label>
        <Input name="editora_id_editora" type="text" />
      </InputArea>
      <InputArea>
        <Label>Quantidade</Label>
        <Input name="quantidade" type="number" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="preco_livro" type="number" />
      </InputArea>
      <InputArea>
        <Label>Em Estoque</Label>
        <Input name="em_estoque" type="text" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
