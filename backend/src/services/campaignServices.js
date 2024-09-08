import Campaign from "../models/Campaign.js";

const getCampaign = async (req,res) => {
   try {
      const campaign = await Campaign.findAll();
      return campaign;
   } catch (error) {
      console.error("Erro ao buscar Campanhas:", error);
      throw error;
   }
};

const setCampaign = async (req, res) => {
   const {
      title,
      subTitle,
      description,
      typeOfCampaign,
      dateAndHourCampaign,
      isPrivate,
      isFeatured,
      numberOfNumbers,
      quotaValue,
      timeToPay,
      limitValue,
      minimunQuantity,
      maximunQuantity,
      minimumCampaign,
      isAwardedQuotas,
      awardedQuotas,
      awardedQuotasDescription,
      isRanking,
      showTicketQuantity,
      rankingMessage,
      winnerName,
      showProgressBar,
      isDiscount,
   } = req.body;

     if (
       !title ||
       !subTitle ||
       !description ||
       !typeOfCampaign ||
       !dateAndHourCampaign ||
       !numberOfNumbers ||
       !quotaValue ||
       !timeToPay ||
       !limitValue ||
       !minimunQuantity ||
       !maximunQuantity ||
       !quantityToDraw ||
       !drawDate ||
       !minimumCampaign ||
       !awardedQuotas ||
       !awardedQuotasDescription ||
       !rankingMessage ||
       !winnerName
     ) {
       return res.status(400).json({ message: "Todos os campos são obrigatórios" });
     }
   console.log(req.body);
   try {
      const newCampaign = await Campaign.create({
         title,
         subTitle,
         description,
         typeOfCampaign,
         dateAndHourCampaign,
         isPrivate,
         isFeatured,
         numberOfNumbers,
         quotaValue,
         timeToPay,
         limitValue,
         minimunQuantity,
         maximunQuantity,

         minimumCampaign,
         isAwardedQuotas,
         awardedQuotas,
         awardedQuotasDescription,
         isRanking,
         showTicketQuantity,
         rankingMessage,
         winnerName,
         showProgressBar,
         isDiscount,
      });

      res.status(201).json({
         message: "Campanha criada com sucesso",
         campaign: newCampaign,
      });
   } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: "Erro no servidor" });
   }
};

export { getCampaign, setCampaign };
