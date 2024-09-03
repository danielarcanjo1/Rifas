import { useState } from "react";
import { useForm } from "../../context/FormContext";

export default function AwardedQuotasForm() {
  const { formData, updateFormData } = useForm();
  const [isAwardedQuotas, setIsAwardedQuotas] = useState(formData.isAwardedQuotas);

  const handleAwardedQuotas = (value) => {
    setIsAwardedQuotas(value);
    updateFormData("isAwardedQuotas", value);
  };

  return (
    <>
      <div className="flex flex-col mt-4 gap-4">
        <label className="text-white">Utilizar cotas Premiadas?</label>
        <div className="privateCampaignButton flex ">
          <button
          type="button"
            onClick={() => handleAwardedQuotas(false)}
            className={`text-white p-2 ${!isAwardedQuotas ? "bg-red-500" : "bg-gray-700"} text-black`}
          >
            Não
          </button>
          <button
          type="button"
            onClick={() => handleAwardedQuotas(true)}
            className={`p-2 ${isAwardedQuotas ? "bg-green-500" : "bg-gray-700"} text-white`}
          >
            Sim
          </button>
        </div>
        {isAwardedQuotas && (
          <div className="mt-4 w-full rounded">
            <label className="block text-white mb-2">Cotas Premiadas</label>
            <p className="text-xs text-yellow-500 mt-1 mb-1">Separe os valores por vírgula e não use espaço</p>
            <input
              type="text"
              className="p-2 mb-2 w-full rounded p-2 rounded-md bg-gray-800 text-white"
              placeholder="ex: 12345, 00324, 100001, 00065"
              value={formData.awardedQuotas}
              onChange={(event) => updateFormData("awardedQuotas", event.target.value)}
            />
            <label className="block text-white mb-2">Descrição:</label>
            <input
              type="text"
              className="p-2 w-full rounded-md bg-gray-800 text-white"
              placeholder="ex: O pagamento das cotas premiadas será no dia que a campanha encerra"
              value={formData.awardedQuotasDescription}
              onChange={(event) => updateFormData("awardedQuotasDescription", event.target.value)}
            />
          </div>
        )}
      </div>
    </>
  );
}
