import express from "express";
import cors from "cors";
import router from "./src/routes/index.js";
import sequelize from "./src/config/database.js";

const PORT = process.env.SERVER_PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.use(router);

app.listen(PORT, async () => {
   console.log(`server is runing on http://localhost:${PORT}`);
   try {
      await sequelize.authenticate();
      console.log("Conexão com o banco de dados estabelecida com sucesso.");
   } catch (error) {
      console.error("Não foi possível conectar ao banco de dados:", error);
   }
});
