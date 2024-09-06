import { useForm } from "../../context/FormContext";

const getCampaign = async (req,res) =>{
   const campaigns = await fetch("http://localhost:3000/campaign")
   console.log(campaigns)
}
getCampaign()
export default function Campaign() {
   const { formData } = useForm();
   return (
      
         <div>
            <h1 className="text-3xl">{formData.title}</h1>
            <h1>{a}</h1>
            <p>{formData.subTitle}</p>
            <p>{formData.description}</p>
         </div>
      
   );
}
