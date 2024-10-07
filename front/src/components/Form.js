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
  width: 120px;
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

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.cliente_id_cliente.value = onEdit.cliente_id_cliente;
      user.data_cadastro_cliente.value = onEdit.data_cadastro_cliente;
      user.cpf_cliente.value = onEdit.cpf_cliente;
      user.telefone_cliente.value = onEdit.telefone_cliente;
      user.email_cliente.value = onEdit.email_cliente;
      user.senha_cliente.value = onEdit.senha_cliente;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.cliente_id_cliente.value ||
      !user.data_cadastro_cliente.value ||
      !user.cpf_cliente.value ||
      !user.telefone_cliente.value ||
      !user.email_cliente.value ||
      !user.senha_cliente.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/clientes" + onEdit.cliente_id_cliente, {
          cliente_id_cliente: user.cliente_id_cliente.value,
          data_cadastro_cliente: user.data_cadastro_cliente.value,
          cpf_cliente: user.cpf_cliente.value,
          telefone_cliente: user.telefone_cliente.value,
          email_cliente: user.email_cliente.value,
          senha_cliente: user.senha_cliente.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/clientes", {
          cliente_id_cliente: user.cliente_id_cliente.value,
          data_cadastro_cliente: user.data_cadastro_cliente.value,
          cpf_cliente: user.cpf_cliente.value,
          telefone_cliente: user.telefone_cliente.value,
          email_cliente: user.email_cliente.value,
          senha_cliente: user.senha_cliente.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    user.cliente_id_cliente.value = "";
    user.data_cadastro_cliente.value = "";
    user.cpf_cliente.value = "";
    user.telefone_cliente.value = "";
    user.email_cliente.value = "";
    user.senha_cliente.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>ID Cliente</Label>
        <Input name="cliente_id_cliente" type="text" />
      </InputArea>
      <InputArea>
        <Label>Data de Cadastro</Label>
        <Input name="data_cadastro_cliente" type="date" />
      </InputArea>
      <InputArea>
        <Label>CPF</Label>
        <Input name="cpf_cliente" type="text" />
      </InputArea>
      <InputArea>
        <Label>Telefone</Label>
        <Input name="telefone_cliente" type="text" />
      </InputArea>
      <InputArea>
        <Label>E-mail</Label>
        <Input name="email_cliente" type="email" />
      </InputArea>
      <InputArea>
        <Label>Senha</Label>
        <Input name="senha_cliente" type="password" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
