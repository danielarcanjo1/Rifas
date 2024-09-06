import express from "express";
import { getCampaign, setCampaign } from "../services/campaignService.js";
import { getUsers, setUser } from "../services/userServices.js";

const router = express.Router();

router.get("/campaign", async (req, res) => {
   try {
      const campaign = await getCampaign();
      console.log(campaign);
      res.send(campaign);
   } catch (err) {
      console.error(err.message);
      res.status(500).send("Erro no servidor");
   }
});

router.post("/register-campaign", setCampaign)


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

export default router 
