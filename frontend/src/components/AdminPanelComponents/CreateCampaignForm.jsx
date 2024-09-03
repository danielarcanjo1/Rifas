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
    function handleSelectItem(item) {
        setSelectedItem(item);
    }

    function handleSubmitForm(event) {
        event.preventDefault();
       
        updateFormData('title', formData.title);
        updateFormData('subTitle', formData.subTitle);
        localStorage.setItem('formData', JSON.stringify(formData));

        alert('Dados do formulário salvos no contexto!');
    }

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
