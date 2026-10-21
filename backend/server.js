import express from "express";
import cors from "cors"
import dotenv from "dotenv";
import produtosRoutes from "./routes/produtos.js";
dotenv.config();
const app = express();
const port = 3005;

app.use(cors());
app.use(express.json());

app.use("/", produtosRoutes);

app.use((e, req, res, next) => {
    console.error("Erro: ", e.message);
    res.status(500).json({
      mensagem: "Falha interna do servidor",
      erro: e.message
    });
  });
  
  app.listen(port, () => {
    console.log(`Server rodadando em http://localhost:${port}`);
  
  });