import { useState } from "react";
import DataForm from "../CreateCampaignFormComponents/DataForm";
import ImagesForm from "../CreateCampaignFormComponents/ImagesForm";
import DiscountForm from "../CreateCampaignFormComponents/DiscountForm";
import RankingForm from "../CreateCampaignFormComponents/RankingForm";
import ProgressBarForm from "../CreateCampaignFormComponents/ProgressBarForm";
import WinnerForm from "../CreateCampaignFormComponents/WinnerForm";
import AwardedQuotasForm from "../CreateCampaignFormComponents/AwardedQuotasForm";
import { useForm } from "../../context/FormContext";

export default function CreateCampaignForm() {
   const [selectedItem, setSelectedItem] = useState("Dados");
   const { formData } = useForm();
   function handleSelectItem(item) {
      setSelectedItem(item);
   }

   const handleSubmitForm = async (event) => {
      event.preventDefault();
      localStorage.setItem("formData", JSON.stringify(formData));
      try {
         const response = await fetch("http://localhost:3000/register-campaign", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });
         if(response.ok){
            const result = await response.json()
            console.log(result)
         }
      } catch (error) {
         console.error(error);
      }
   };

   const componentsMap = {
      Dados: <DataForm />,
      Imagens: <ImagesForm />,
      Descontos: <DiscountForm />,
      Ranking: <RankingForm />,
      ProgressBar: <ProgressBarForm />,
      Ganhador: <WinnerForm />,
      AwardedQuotes: <AwardedQuotasForm />,
   };

   return (
      <form onSubmit={handleSubmitForm}>
         <div className="mt-10 p-4 rounded-md bg-gray-900 w-fit ">
            <div className="tabs ">
               <ul className="flex gap-1 text-white bg-gray-900">
                  <li
                     onClick={() => handleSelectItem("Dados")}
                     className={`${
                        selectedItem === "Dados"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Dados
                  </li>
                  <li
                     onClick={() => handleSelectItem("Imagens")}
                     className={`${
                        selectedItem === "Imagens"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Imagens
                  </li>
                  <li
                     onClick={() => handleSelectItem("Descontos")}
                     className={`${
                        selectedItem === "Descontos"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Descontos
                  </li>
                  <li
                     onClick={() => handleSelectItem("Ranking")}
                     className={`${
                        selectedItem === "Ranking"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Ranking de compradores
                  </li>
                  <li
                     onClick={() => handleSelectItem("ProgressBar")}
                     className={`${
                        selectedItem === "ProgressBar"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Barra de Progresso
                  </li>
                  <li
                     onClick={() => handleSelectItem("Ganhador")}
                     className={`${
                        selectedItem === "Ganhador"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Ganhador
                  </li>
                  <li
                     onClick={() => handleSelectItem("AwardedQuotes")}
                     className={`${
                        selectedItem === "AwardedQuotes"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     } py-2 px-8 border cursor-pointer`}
                  >
                     Cotas premiadas
                  </li>
               </ul>
            </div>
            {componentsMap[selectedItem]}
            <button
               type="submit"
               className="bg-purple-500 p-2 rounded-md mt-10 text-white w-36 hover:scale-110 hover:bg-purple-600"
            >
               Salvar
            </button>
         </div>
      </form>
   );
}
