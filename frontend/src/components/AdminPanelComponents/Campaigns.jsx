import { useState } from "react"

import CreateCampaignForm from "./CreateCampaignForm";
export default function Campaign() {
   const [showNewCampaignForm, setShowNewCampaignForm] = useState(false);

   const handleButtonClick = () => {
     setShowNewCampaignForm(!showNewCampaignForm);
   };
   return (
      <>
         <div className="Campaign flex gap-4">
            <h1 className="text-white text-3xl">Campanhas</h1>
            <button onClick={handleButtonClick} className="bg-purple-500 text-white rounded-md p-2 hover:bg-purple-600 hover:scale-110">
               Criar Nova
            </button>
         </div>
         {showNewCampaignForm && <CreateCampaignForm />}
      </>
   );
}
