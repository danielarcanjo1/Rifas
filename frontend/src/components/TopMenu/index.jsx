import { Link } from "react-router-dom";
import { useState } from "react";

export default function TopMenu() {
   const [selectedItem, setSelectedItem] = useState("");
   const [menuOpen, setMenuOpen] = useState(false);

   function handleItemSelected(item) {
      setSelectedItem(item);
      setMenuOpen(false);
   }

   return (
      <>
         <header className="flex flex-col md:flex-row items-center justify-around bg-gray-800 h-auto md:h-20 w-full px-6 md:px-14">
            <div className="flex items-center justify-between w-full md:w-auto h-20">
               <h1 className="text-white text-2xl md:text-3xl">SUA LOGO</h1>
               <button
                  className="text-white md:hidden"
                  onClick={() => setMenuOpen(!menuOpen)}
               >
                  ☰
               </button>
            </div>

            <nav className={`w-full md:w-auto ${menuOpen ? 'block' : 'hidden'} md:flex md:items-center bg-gray`}>
               <ul className="flex flex-col md:flex-row gap-3 items-center  md:items-stretch justify-center py-4 md:py-0">
                  <li
                     onClick={() => handleItemSelected("Inicio")}
                     className={`flex py-2 px-4  justify-center cursor-pointer text-white hover:scale-110  ${
                        selectedItem === "Inicio"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     } `}
                  >
                     <div className="flex items-center gap-5">
                        <Link to="/inicio">Inicio</Link>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("campanhas")}
                     className={`flex py-2 px-4 justify-center cursor-pointer text-white hover:scale-110 ${
                        selectedItem === "campanhas"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     }`}
                  >
                     <p>Campanhas</p>
                  </li>

                  <li
                     onClick={() => handleItemSelected("meus titulos")}
                     className={`flex py-2 px-4 justify-center cursor-pointer text-white hover:scale-110 ${
                        selectedItem === "meus titulos"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     }`}
                  >
                     <div className="flex items-center justify-center gap-5">
                        <p>Meus Títulos</p>
                     </div>
                  </li>

                  <li
                     onClick={() => handleItemSelected("cadastro")}
                     className={`flex py-2 px-4 justify-center cursor-pointer text-white hover:scale-110 ${
                        selectedItem === "cadastro"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <Link to="/cadastrar">Cadastro</Link>
                     </div>
                  </li>

                  <li
                     onClick={() => handleItemSelected("entrar")}
                     className={`flex py-2 px-4 justify-center cursor-pointer text-white hover:scale-110 ${
                        selectedItem === "entrar"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     }`}
                  >
                     <div className="flex items-center gap-5">
                        <Link to="/login">Entrar</Link>
                     </div>
                  </li>
                  <li
                     onClick={() => handleItemSelected("adm")}
                     className={`flex py-2 px-4 justify-center cursor-pointer text-white hover:scale-110 ${
                        selectedItem === "adm"
                           ? "text-yellow-400"
                           : "hover:text-yellow-500"
                     }`}
                  >
                     <Link className="text-white" to="/painel-do-administrador">
                        <div className="flex items-center gap-5">Adm</div>
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
}
