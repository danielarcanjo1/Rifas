import { useState } from "react";
import { useNavigate } from "react-router-dom"

export default function RegisterForm() {
  
   const [formData, setFormData] = useState({
      name:"",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      dateOfBirth: "",
      cpf: "",
      phone: "",
      confirmPhone: "",
      address: {
         cep: "",
         street: "",
         number: "",
         neighborhood: "",
         complement: "",
         uf: "",
         city: "",
         referencePoint: "",
      },
   });

   const [isDialogOpen, setIsDialogOpen] = useState(false);
   const [dialogMessage, setDialogMessage] = useState("");
   const [isError, setIsError] = useState(false);
   const navigate = useNavigate()

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name.startsWith("address")) {
         const addressField = name.replace("address[", "").replace("]", "");
         setFormData((prevState) => ({
            ...prevState,
            address: {
               ...prevState.address,
               [addressField]: value,
            },
         }));
      } else {
         setFormData((prevState) => ({
            ...prevState,
            [name]: value,
         }));
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         if (response.ok) {
            const result = await response.json()
            setDialogMessage(result.message);
            setIsError(false);
            setIsDialogOpen(true);
           
         } else {
            const result = await response.json()
            setDialogMessage(result.message);
            setIsError(true);
            setIsDialogOpen(true);
         }
      } catch (error) {
         setDialogMessage("Erro no envio da requisição.");
         setIsError(true);
         setIsDialogOpen(true);
      }
   };

   
   const closeDialog = () => {
      setIsDialogOpen(false);
   };

   return (
      <div className="Page bg-gray-900">
         <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2 w-full h-full bg-zinc-200 m-auto p-4 rounded md:w-1/2"
         >
            <h3 className="text-xl">Identificação</h3>
            <div className="flex flex-col gap-2 bg-white rounded p-4">
            <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="name">
                     Nome completo
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="name"
                     name="name"
                     value={formData.name}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="username">
                     Nome de usuário
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="username"
                     name="username"
                     value={formData.username}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="cpf">
                     CPF
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="cpf"
                     name="cpf"
                     value={formData.cpf}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="dateOfBirth">
                     Data de nascimento
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="date"
                     id="dateOfBirth"
                     name="dateOfBirth"
                     value={formData.dateOfBirth}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="email">
                     Email
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="email"
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="phone">
                     Telefone
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="phone"
                     name="phone"
                     value={formData.phone}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="confirmPhone">
                     Confirme seu telefone
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="confirmPhone"
                     name="confirmPhone"
                     value={formData.confirmPhone}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="password">
                     Senha
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="password"
                     id="password"
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="confirmPassword">
                     Repita sua senha
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="password"
                     id="confirmPassword"
                     name="confirmPassword"
                     value={formData.confirmPassword}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <h3 className="text-xl">Endereço</h3>
            <div className="flex flex-col gap-2 bg-white rounded p-4">
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="cep">
                     CEP
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="cep"
                     name="address[cep]"
                     value={formData.address.cep}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="street">
                     Logradouro
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="street"
                     name="address[street]"
                     value={formData.address.street}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="number">
                     Número
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="number"
                     name="address[number]"
                     value={formData.address.number}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="neighborhood">
                     Bairro
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="neighborhood"
                     name="address[neighborhood]"
                     value={formData.address.neighborhood}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="complement">
                     Complemento
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="complement"
                     name="address[complement]"
                     value={formData.address.complement}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="uf">
                     UF
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="uf"
                     name="address[uf]"
                     value={formData.address.uf}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="city">
                     Cidade
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="city"
                     name="address[city]"
                     value={formData.address.city}
                     onChange={handleChange}
                  />
               </div>
               <div className="flex flex-col gap-2">
                  <label className="font-semibold" htmlFor="referencePoint">
                     Ponto de referência
                  </label>
                  <input
                     className="outline-none border rounded p-2"
                     type="text"
                     id="referencePoint"
                     name="address[referencePoint]"
                     value={formData.address.referencePoint}
                     onChange={handleChange}
                  />
               </div>
            </div>
            <button
               type="submit"
               className="bg-gray-400 p-2 rounded mt-4 hover:bg-sky-500 hover:text-white"
            >
               Cadastrar
            </button>
         </form>
         {isDialogOpen && (
            <div className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}>
               <div className="bg-white p-6 rounded shadow-lg">
                  
                  <h2 className={`text-xl font-semibold ${isError ? "text-red-500" : "text-green-500"}`}>
                     {isError ? "Erro: " : "Sucesso: "}
                  </h2>
                  <p className="mt-4">{dialogMessage}</p>
                  <button
                     onClick={closeDialog}
                     className="mt-6 bg-gray-400 p-2 rounded hover:bg-sky-500 hover:text-white"
                  >
                     OK
                  </button>
               </div>
            </div>
         )}
      </div>
   );
}
