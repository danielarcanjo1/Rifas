import express from "express";
const router = express.Router();
import { getCampaign, setCampaign } from "../services/campaignServices.js";

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

export default router;
