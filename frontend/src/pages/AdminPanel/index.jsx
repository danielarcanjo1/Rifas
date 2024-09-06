import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import {
   FaRankingStar,
   FaUsers,
   FaRegUser,
   FaMoneyBillTransfer,
   FaGear,
} from "react-icons/fa6";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { CiViewList } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Dashboard from "../../components/AdminPanelComponents/Dashboard";
import Campaigns from "../../components/AdminPanelComponents/Campaigns";
import Requests from "../../components/AdminPanelComponents/Requests";
import Reports from "../../components/AdminPanelComponents/Reports";
import Ranking from "../../components/AdminPanelComponents/Ranking";
import Customers from "../../components/AdminPanelComponents/Customers";
import UsersAdm from "../../components/AdminPanelComponents/UsersAdm";
import Gateway from "../../components/AdminPanelComponents/Gateway";
import Configs from "../../components/AdminPanelComponents/Configs";

export default function AdminPanel({ onHideMenu }) {
   useEffect(() => {
      onHideMenu(false);

      return () => {
         onHideMenu(true);
      };
   }, [onHideMenu]);

   const [selectedItem, setSelectedItem] = useState("Dashboard");

   function handleSelectItem(item) {
      setSelectedItem(item);
   }

   const componentsMap = {
      Dashboard: <Dashboard />,
      Campanhas: <Campaigns />,
      Pedidos: <Requests />,
      Relatorios: <Reports />,
      Ranking: <Ranking />,
      Clientes: <Customers />,
      Usuarios: <UsersAdm />,
      Gateway: <Gateway />,
      Config: <Configs />,
   };

   return (
      <div className="mainPage bg-black min-h-screen flex flex-col">
         <div className="header fixed left-0 top-0 w-full h-16 bg-gray-900 p-4">
            <h1 className="text-2xl text-white">LOGO</h1>
         </div>

         <div className="flex flex-grow">
            <div className="sidebar fixed left-0 top-16 h-full w-64 bg-gray-900">
               <ul>
                  <li
                     onClick={() => handleSelectItem("Dashboard")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Dashboard"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <IoHomeOutline />
                     Dashboard
                  </li>
                  <li
                     onClick={() => handleSelectItem("Campanhas")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Campanhas"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <CiViewList />
                     Campanhas
                  </li>
                  <li
                     onClick={() => handleSelectItem("Pedidos")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Pedidos"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <IoCartOutline />
                     Pedidos
                  </li>
                  <li
                     onClick={() => handleSelectItem("Relatorios")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Relatorios"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <GrDocumentText />
                     Relatorios
                  </li>
                  <li
                     onClick={() => handleSelectItem("Ranking")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Ranking"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <FaRankingStar />
                     Ranking
                  </li>
                  <li
                     onClick={() => handleSelectItem("Clientes")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Clientes"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <FaUsers />
                     Clientes
                  </li>
                  <li
                     onClick={() => handleSelectItem("Usuarios")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Usuarios"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <FaRegUser />
                     Usuarios
                  </li>
                  <li
                     onClick={() => handleSelectItem("Gateway")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Gateway"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <FaMoneyBillTransfer />
                     Gateway de pagamento
                  </li>
                  <li
                     onClick={() => handleSelectItem("Config")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Config"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <FaGear />
                     Configurações
                  </li>
                  <li
                     onClick={() => handleSelectItem("Voltar")}
                     className={`flex items-center gap-4 text-white p-4 cursor-pointer ${
                        selectedItem === "Voltar"
                           ? "bg-purple-500"
                           : "hover:bg-purple-500"
                     }`}
                  >
                     <Link className="flex  gap-4 items-center" to="/inicio">
                        <FaArrowAltCircleLeft />
                        Voltar
                     </Link>
                  </li>
               </ul>
            </div>

            <div className="contentCenter flex-grow pl-96 pt-28 bg-black">
               {componentsMap[selectedItem]}
            </div>
         </div>
      </div>
   );
}

AdminPanel.propTypes = {
   onHideMenu: PropTypes.func,
};
