import express from "express";
const router = express.Router();
import { getUsers, setUser } from "../services/userServices.js";

router.get("/users", async (req, res) => {
   try {
      const users = await getUsers();
      console.log(users);
      res.send(users);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Erro no servidor");
   }
});

router.post("/register", setUser)

export default router;
