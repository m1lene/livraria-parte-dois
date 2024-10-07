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

const Form = ({ getAutor, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const autor = ref.current;

      autor.id_autor.value = onEdit.id_autor;
      autor.nome_autor.value = onEdit.nome_autor;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const autor = ref.current;

    if (!autor.id_autor.value || !autor.nome_autor.value) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/autores/" + onEdit.id_autor, {
          id_autor: autor.id_autor.value,
          nome_autor: autor.nome_autor.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/autores", {
          id_autor: autor.id_autor.value,
          nome_autor: autor.nome_autor.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    autor.id_autor.value = "";
    autor.nome_autor.value = "";

    setOnEdit(null);
    getAutor();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>ID Autor</Label>
        <Input name="id_autor" type="text" />
      </InputArea>
      <InputArea>
        <Label>Nome do Autor</Label>
        <Input name="nome_autor" type="text" />
      </InputArea>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
