import { useState, useEffect } from "react";

export default function Campaign() {
   const [campaigns, setCampaigns] = useState([]);

   const getCampaigns = async () => {
      try {
         const response = await fetch("http://localhost:3000/campaign");

         if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
         }

         const data = await response.json();
         setCampaigns(data);
      } catch (error) {
         console.error(error.message);
      }
   };

   useEffect(() => {
      getCampaigns();
   }, []);

   return (
      <>
         <h1 className="text-3xl mb-2">Campanhas</h1>
         <ul>
            {campaigns.map((campaign) => (
               <li className="flex flex-col gap-2" key={campaign.id}>
                  <span>{campaign.title}</span>
                  <span>{campaign.subTitle}</span>
                  <span className="break-words">{campaign.description}</span>
               </li>
            ))}
         </ul>
      </>
   );
}
