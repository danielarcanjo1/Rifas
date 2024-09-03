import { useState } from "react";
import { useForm } from "../../context/FormContext";

export default function DiscountForm() {
   const { formData, updateFormData } = useForm();
   const [isDiscount, setIsDiscount] = useState(formData.isDiscount);
   
   const handleDiscountToggle = (value) => {
      setIsDiscount(value);
      updateFormData("isDiscount",value)
     
   };
   return (
      <>
         <div className="flex flex-col mt-4 gap-4">
            <label className="text-white" htmlFor="">
               Utilizar descontos?
            </label>
            <div className="flex gap-0.5">
               <button
               type="button"
                  onClick={()=>handleDiscountToggle(false)}
                  className={`p-2 rounded ${
                     isDiscount ? "bg-gray-500" : "bg-red-500 text-white"
                  }`}
                  value={formData.isDiscount}
                  onChange={updateFormData}
               >
                  Não
               </button>
               <button
               type="button"
                  onClick={()=>handleDiscountToggle(true)}
                  className={`p-2 rounded text-white ${
                     isDiscount ? "bg-green-500" : "bg-gray-500"
                  }`}
                  value={formData.isDiscount}
               >
                  Sim
               </button>
               
            </div>
            {isDiscount && (
               <div className="mt-4 p-4 w-64 border border-gray-200 rounded">
                  <label className="block text-white mb-2">
                     Quantidade de Numeros:
                  </label>
                  <input
                     type="text"
                     className="p-2 mb-2 w-full rounded bg-gray-800 text-white"
                     placeholder="Quantridade de numeros"
                  />
                  <label className="block text-white mb-2">
                     Valor do desconto:
                  </label>
                  <input
                     type="text"
                     className="p-2 w-full rounded bg-gray-800 text-white"
                     placeholder="Valor do desconto"
                  />
               </div>
            
            )}
         </div>
      </>
   );
}
