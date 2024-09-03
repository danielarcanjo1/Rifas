import { useForm } from "../../context/FormContext";
export default function Campaign() {
   const { formData } = useForm();
   return (
      
         <div>
            <h1 className="text-3xl">{formData.title}</h1>
            <p>{formData.subTitle}</p>
            <p>{formData.description}</p>
         </div>
      
   );
}
