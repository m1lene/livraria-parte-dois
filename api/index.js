import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.js";
import autorRoutes from "./routes/autor.js";
import editoraRoutes from "./routes/editora.js";
import livrosRoutes from "./routes/livros.js";
import vendaItemRoutes from "./routes/vendaItem.js";
import vendaItemHasClienteRoutes from "./routes/vendaItemHasCliente.js";
import livroHasAutorRoutes from "./routes/livrosHasAutor.js"; // Importar as rotas de livro_has_autor

const app = express();

app.use(express.json());
app.use(cors());

app.use("/clientes", userRoutes);
app.use("/autores", autorRoutes);
app.use("/editoras", editoraRoutes);
app.use("/livros", livrosRoutes);
app.use("/venda-items", vendaItemRoutes);
app.use("/venda-item-has-clientes", vendaItemHasClienteRoutes);
app.use("/livro-has-autores", livroHasAutorRoutes); // Usar as rotas de livro_has_autor

app.listen(8800, () => {
  console.log("Servidor rodando na porta 8800");
});
