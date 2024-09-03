import { useState } from "react";
import { useForm } from "../../context/FormContext";

export default function RankingForm() {
  const { formData, updateFormData } = useForm();
  const [isRanking, setIsRanking] = useState(formData.isRanking);
  const [isQtd, setIsQtd] = useState(formData.showTicketQuantity);

  const toggleRanking = () => {
    setIsRanking((prevState) => !prevState);
    updateFormData("isRanking", !isRanking);
  };

  const toggleQtd = () => {
    setIsQtd((prevState) => !prevState);
    updateFormData("showTicketQuantity", !isQtd);
  };

  return (
    <>
      <div className="flex flex-col mt-4 gap-4">
        <label className="text-white" htmlFor="">
          Habilitar ranking de compradores?
        </label>
        <div className="flex gap-0.5">
          <button
          type="button"
            onClick={toggleRanking}
            className={`p-2 rounded ${
              !isRanking ? "bg-red-500 text-white" : "bg-gray-500"
            }`}
          >
            Não
          </button>
          <button
          type="button"
            onClick={toggleRanking}
            className={`p-2 rounded text-white ${
              isRanking ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            Sim
          </button>
        </div>
        <label className="text-white" htmlFor="">
          Mostrar Quantidade de bilhetes?
        </label>
        <div className="flex gap-0.5">
          <button
          type="button"
            onClick={toggleQtd}
            className={`p-2 rounded ${
              !isQtd ? "bg-red-500 text-white" : "bg-gray-500"
            }`}
          >
            Não
          </button>
          <button
          type="button"
            onClick={toggleQtd}
            className={`p-2 rounded text-white ${
              isQtd ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            Sim
          </button>
        </div>

        {isRanking && (
          <div className="w-full rounded">
            <label className="block text-white mb-2">
              Mensagem da promoção de ranking
            </label>
            <input
              type="text"
              className="p-2 mb-2 w-full rounded bg-gray-800 text-white"
              placeholder="Mensagem do ranking"
              value={formData.rankingMessage}
              onChange={(event) =>
                updateFormData("rankingMessage", event.target.value)
              }
            />
          </div>
        )}
      </div>
    </>
  );
}
