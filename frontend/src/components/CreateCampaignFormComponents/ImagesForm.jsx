import { useForm } from "../../context/FormContext";
export default function ImagesForm() {
   const { formData, updateFormData } = useForm();
   return (
      <>
         <div className="mainImage flex flex-col gap-2  mt-10 p-4 text-white">
            <label htmlFor="image1">Imagem Principal</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="file"
               name="image1"
               id="image1"
               value={formData.mainImg}
               onChange={(event) => updateFormData("mainImg",event.target.value)}
            />
            <label htmlFor="image1">Imagens secudarias</label>
            <input
               className="p-2 rounded-lg bg-gray-800"
               type="file"
               multiple
               name="images"
               id="images"
               value={formData.images}
               onChange={(event) => updateFormData("images",event.target.value)}
            />
         </div>
      </>
   );
}
