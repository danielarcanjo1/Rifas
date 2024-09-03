import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
   const [loginFormOpen, setLoginFormOpen] = useState(true);
   const navigate = useNavigate()

   function handleCloseForm() {
      setLoginFormOpen(false);
      navigate("/inicio")  
   }
   return (
      <>
         {loginFormOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.7)] backdrop-blur-sm z-50">
               <form className="relative flex flex-col justify-center w-72 bg-zinc-200 p-4 gap-4 rounded">
                  <div>
                     <h1 className="text-2xl font-semibold">Login</h1>
                     <IoIosClose onClick={handleCloseForm} className="absolute top-0 right-0 w-8 h-8 cursor-pointer hover:scale-110" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <label htmlFor="email">Email</label>
                     <input
                        className="p-2 rounded outline-none border"
                        type="text"
                        id="email"
                        placeholder="Email"
                     />
                  </div>
                  <div className="flex flex-col gap-1">
                     <label htmlFor="password">Senha</label>
                     <input
                        className="p-2 rounded outline-none border"
                        type="password"
                        id="password"
                        placeholder="Senha"
                     />
                     <button className="bg-sky-500 text-white rounded p-2 hover:bg-sky-600 mt-6 mb-2">Login</button>
                     <div className="flex justify-between mt-1">
                        <a href="" className="text-xs hover:text-blue-400">Esqueceu a senha ?</a>
                        <a href="http://localhost:5173/cadastrar" className="text-xs hover:text-blue-400">Não tem cadastro ?</a>
                     </div>
                  </div>
               </form>
            </div>
         )}
      </>
   );
}
