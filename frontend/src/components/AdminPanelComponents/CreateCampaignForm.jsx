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
    const { formData, updateFormData } = useForm(); 
    const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [dialogMessage, setDialogMessage] = useState("");
   const [isError, setIsError] = useState(false);

   const closeDialog = () => {
    setIsDialogOpen(false);
 };

    function handleSelectItem(item) {
        setSelectedItem(item);
    }

    const handleSubmitForm = async (e) => {
        e.preventDefault();
  
        try {
           const response = await fetch("http://localhost:3000/register-campaign", {
              method: "POST",
              headers: {
                 "Content-Type": "application/json",
              },
              body: JSON.stringify(formData),
           });
  
           if (response.ok) {
              const result = await response.json()
              setDialogMessage(result.message);
              setIsError(false);
              setIsDialogOpen(true);
             
           } else {
              const result = await response.json()
              setDialogMessage(result.message);
              setIsError(true);
              setIsDialogOpen(true);
           }
        } catch (error) {
           setDialogMessage("Erro no envio da requisição.");
           setIsError(true);
           setIsDialogOpen(true);
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
        <div>
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
        {isDialogOpen && (
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
               <div className="bg-white p-6 rounded shadow-lg">
                  
                  <h2 className={`text-xl font-semibold ${isError ? "text-red-500" : "text-green-500"}`}>
                     {isError ? "Erro: " : "Sucesso: "}
                  </h2>
                  <p className="mt-4">{dialogMessage}</p>
                  <button
                     onClick={closeDialog}
                     className="mt-6 bg-gray-400 p-2 rounded hover:bg-sky-500 hover:text-white"
                  >
                     OK
                  </button>
               </div>
            </div>
         )}
    </div>
    );
}
