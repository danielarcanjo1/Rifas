import { useForm } from "../../context/FormContext";

export default function WinnerForm() {
  const { formData, updateFormData } = useForm();

  return (
    <div className="mt-4 flex flex-col gap-1">
      <label className="text-white" htmlFor="winnerName">
        Nome do Ganhador
      </label>
      <input
        className="p-2 rounded-lg bg-gray-800 text-white"
        type="text"
        id="winnerName"
        value={formData.winnerName}
        onChange={(event) => updateFormData("winnerName", event.target.value)}
      />
    </div>
  );
}
