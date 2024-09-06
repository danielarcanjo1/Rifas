import { useState } from "react";
import { useForm } from "../../context/FormContext";

export default function ProgressBarForm() {
  const { formData, updateFormData } = useForm();
  const [showProgressBar, setShowProgressBar] = useState(formData.showProgressBar);

  const showProgressBarHandle = () => {
    const newValue = !showProgressBar;
    setShowProgressBar(newValue);
    updateFormData("showProgressBar", newValue);
  };

  return (
    <div>
      <div className="flex flex-col mt-4 gap-4">
        <label className="text-white" htmlFor="">
          Mostrar barra de progresso de vendas da campanha?
        </label>
        <div className="flex gap-0.5">
          <button
          type="button"
            onClick={showProgressBarHandle}
            className={`p-2 rounded ${
              !showProgressBar ? "bg-red-500 text-white" : "bg-gray-500"
            }`}
          >
            Não
          </button>
          <button
          type="button"
            onClick={showProgressBarHandle}
            className={`p-2 rounded text-white ${
              showProgressBar ? "bg-green-500" : "bg-gray-500"
            }`}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}
