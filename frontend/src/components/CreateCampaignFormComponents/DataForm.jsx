import { useForm } from "../../context/FormContext";
import { useState } from "react";

export default function DataForm() {
   const { formData, updateFormData } = useForm();
   const [isPrivate, setIsPrivate] = useState(formData.isPrivate);
   const [isFeatured, setIsFeatured] = useState(formData.isFeatured);

   const handlePrivateToggle = (value) => {
      setIsPrivate(value);
      updateFormData("isPrivate", value);
   };

   const handleFeaturedToggle = (value) => {
      setIsFeatured(value);
      updateFormData("isFeatured", value);
   };

   return (
      <>
         <div className="DateForm flex flex-col mt-6 gap-4 w-full text-white">
            <div className="titleField w-full flex flex-col gap-2">
               <label htmlFor="campaignTitle">Título</label>
               <input
                  className="p-2 rounded-lg bg-gray-800"
                  type="text"
                  value={formData.title}
                  onChange={(event) =>
                     updateFormData("title", event.target.value)
                  }
                  name="campaignTitle"
                  id="campaignTitle"
                  placeholder="Nome da campanha"
               />
            </div>
            <div className="subTitleField flex flex-col gap-2">
               <label htmlFor="campaignSubTitle">Subtítulo</label>
               <input
                  className="p-2 rounded-lg bg-gray-800"
                  type="text"
                  value={formData.subTitle}
                  onChange={(event) =>
                     updateFormData("subTitle", event.target.value)
                  }
                  name="campaignSubTitle"
                  id="campaignSubTitle"
                  placeholder="ex: Campanha do milhão"
               />
            </div>
            <div className="titleField flex flex-col gap-2">
               <label htmlFor="descriptionText">Descrição</label>
               <textarea
                  className="p-2 h-32 rounded-lg bg-gray-800"
                  name="descriptionText"
                  value={formData.description}
                  onChange={(event) =>
                     updateFormData("description", event.target.value)
                  }
                  id="descriptionText"
                  placeholder="Descrição da campanha"
               ></textarea>
            </div>
            <div className="selectTypeOfCampaign flex flex-col gap-2">
               <label htmlFor="selectTypeOfCampaign">Tipo da campanha</label>
               <select
                 
                  className="p-2 w-52 rounded-lg bg-gray-800"
                  name="selectTypeOfCampaign"
                  id="selectTypeOfCampaign"
                  value={formData.typeOfCampaign}
                  onChange={(event) =>
                     updateFormData("typeOfCampaign", event.target.value)
                  }
               >
                  <option value="automatic">Automática</option>
                  <option value="manual">Escolha manual</option>
               </select>
            </div>
            <div className="DateAndHourCampaign flex flex-col w-52 gap-2">
               <label htmlFor="DateAndHourCampaign">
                  Data e hora da campanha
               </label>
               <input
                  className="p-2 w-52 rounded-lg bg-gray-800"
                  type="datetime-local"
                  name="dateAndHourCampaign"
                  id="dateAndHourCampaign"
                  value={formData.dateAndHourCampaign}
                  onChange={(event) =>
                     updateFormData("dateAndHourCampaign", event.target.value)
                  }
               />
            </div>
            <div className="privateCampaign flex flex-col gap-2">
               <label htmlFor="">Campanha Privada?</label>
               <div className="privateCampaignButton flex gap-2">
                  <button
                  type="button"
                     onClick={() => handlePrivateToggle(false)}
                     className={`p-2 ${
                        !isPrivate ? "bg-red-500" : "bg-gray-700"
                     } text-black`}
                  >
                     Não
                  </button>
                  <button
                  type="button"
                     onClick={() => handlePrivateToggle(true)}
                     className={`p-2 ${
                        isPrivate ? "bg-green-500" : "bg-gray-700"
                     } text-white`}
                  >
                     Sim
                  </button>
               </div>
            </div>
         </div>
         <div className="featuredCampaign flex flex-col gap-2 text-white mt-2">
            <label htmlFor="">Campanha em destaque?</label>
            <div className="featuredCampaignButton flex gap-2">
               <button
               type="button"
                  onClick={() => handleFeaturedToggle(false)}
                  className={`p-2 ${
                     !isFeatured ? "bg-red-500" : "bg-gray-700"
                  } text-black`}
               >
                  Não
               </button>
               <button
               type="button"
                  onClick={() => handleFeaturedToggle(true)}
                  className={`p-2 ${
                     isFeatured ? "bg-green-500" : "bg-gray-700"
                  } text-white`}
               >
                  Sim
               </button>
            </div>
         </div>

         <div className="numberOfNumbers flex flex-col gap-2 w-52 text-white mt-2">
            <label htmlFor="numberOfNumbers">Quantidade de números</label>
            <select
               className="p-2 w-52 rounded-lg bg-gray-800"
               name="numberOfNumbers"
               id="numberOfNumbers"
               value={formData.numberOfNumbers}
               onChange={(event) =>
                  updateFormData("numberOfNumbers", event.target.value)
               }
            >
               <option value="10">10</option>
               <option value="100">100</option>
               <option value="1000">1.000</option>
               <option value="10000">10.000</option>
               <option value="100000">100.000</option>
               <option value="1000000">1.000.000</option>
               <option value="1000000">10.000.000</option>
            </select>
         </div>
         <div className="quotaValue flex flex-col gap-2 text-white mt-2">
            <label htmlFor="quotaValue">Valor por cota</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="text"
               name="quotaValue"
               id="quotaValue"
               value={formData.quotaValue}
               onChange={(event) =>
                  updateFormData("quotaValue", event.target.value)
               }
            />
         </div>
         <div className="timeToPay flex flex-col gap-2 text-white mt-2">
            <label htmlFor="timeToPay">Tempo para Pagamento</label>
            <select
               className="flex flex-col p-2 w-full rounded-lg bg-gray-800"
               name="timeToPay"
               id="timeToPay"
               value={formData.timeToPay}
               onChange={(event) =>
                  updateFormData("timeToPay", event.target.value)
               }
            >
               <option value=""></option>
               <option value="30">5 Minutos</option>
               <option value="60">10 Minutos</option>
               <option value="90">15 Minutos</option>
               <option value="120">20 Minutos</option>
            </select>
         </div>
         <div className="limitValue flex flex-col gap-2 text-white mt-2">
            <label htmlFor="limitValue">Quantidade limite por usuário</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="text"
               name="limitValue"
               id="limitValue"
               value={formData.limitValue}
               onChange={(event) =>
                  updateFormData("limitValue", event.target.value)
               }
            />
         </div>
         <div className="minimunQuantity flex flex-col gap-2 text-white mt-2">
            <label htmlFor="minimunQuantity">Quantidade mínima de cotas</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="text"
               name="minimunQuantity"
               id="minimunQuantity"
               value={formData.minimunQuantity}
               onChange={(event) =>
                  updateFormData("minimunQuantity", event.target.value)
               }
            />
         </div>
         <div className="maximunQuantity flex flex-col gap-2 text-white mt-2">
            <label htmlFor="maximunQuantity">Quantidade máxima de cotas</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="text"
               name="maximunQuantity"
               id="maximunQuantity"
               value={formData.maximunQuantity}
               onChange={(event) =>
                  updateFormData("maximunQuantity", event.target.value)
               }
            />
         </div>
         <div className="displayStatus flex flex-col gap-2 text-white mt-2">
            <label htmlFor="quantityToDraw">
               Status de exibição
            </label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="text"
               name="displayStatus"
               id="displayStatus"
               value={formData.displayStatus}
               onChange={(event) =>
                  updateFormData("displayStatus", event.target.value)
               }
            />
         </div>
         
         <div className="minimumCampaign flex flex-col gap-2 text-white mt-2">
            <label htmlFor="minimumCampaign">Campanha Mínima</label>
            <select
               className="flex flex-col p-2 w-full rounded-lg bg-gray-800"
               name="minimumCampaign"
               id="minimumCampaign"
               value={formData.minimumCampaign}
               onChange={(event) =>
                  updateFormData("minimumCampaign", event.target.value)
               }
            >
               <option value=""></option>
               <option value="0">0</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
               <option value="6">6</option>
               <option value="7">7</option>
               <option value="8">8</option>
               <option value="9">9</option>
               <option value="10">10</option>
            </select>
         </div>
      </>
   );
}
