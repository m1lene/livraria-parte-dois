import GlobalStyle from "./styles/global";
import styled from "styled-components";
import UserForm from "./components/Form";
import AutorForm from "./components/FormAutor";
import LivroForm from "./components/FormLivro";
import UserGrid from "./components/Grid";
import AutorGrid from "./components/GridAutor";
import LivroGrid from "./components/GridLivro";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h2``;

function App() {
  const [users, setUsers] = useState([]);
  const [onEditUser, setOnEditUser] = useState(null);
  const [autores, setAutores] = useState([]);
  const [onEditAutor, setOnEditAutor] = useState(null);
  const [livros, setLivros] = useState([]);
  const [onEditLivro, setOnEditLivro] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/clientes");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getAutores = async () => {
    try {
      const res = await axios.get("http://localhost:8800/autores");
      setAutores(res.data.sort((a, b) => (a.nome_autor > b.nome_autor ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
  };

  const getLivros = async () => {
    try {
      const res = await axios.get("http://localhost:8800/livros");
      setLivros(res.data.sort((a, b) => (a.titulo > b.titulo ? 1 : -1)));
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    getAutores();
  }, []);

  useEffect(() => {
    getLivros();
  }, []);

  return (
    <>
      <Container>
        <Title>USUÁRIOS</Title>
        <UserForm onEdit={onEditUser} setOnEdit={setOnEditUser} getUsers={getUsers} />
        <UserGrid users={users} setUsers={setUsers} setOnEdit={setOnEditUser} />
      </Container>
      <Container>
        <Title>AUTORES</Title>
        <AutorForm onEdit={onEditAutor} setOnEdit={setOnEditAutor} getAutores={getAutores} />
        <AutorGrid autores={autores} setAutores={setAutores} setOnEdit={setOnEditAutor} />
      </Container>
      <Container>
        <Title>LIVROS</Title>
        <LivroForm onEdit={onEditLivro} setOnEdit={setOnEditLivro} getLivros={getLivros} />
        <LivroGrid livros={livros} setLivros={setLivros} setOnEdit={setOnEditLivro} />
      </Container>
      <ToastContainer autoClose={3000} position="bottom-left" />
      <GlobalStyle />
    </>
  );
}

export default App;
