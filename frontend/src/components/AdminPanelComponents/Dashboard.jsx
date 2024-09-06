import { BsMegaphone } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoBagCheckOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";

export default function Dasboard() {
   const data = [
      {
         id: 23,
         date: "05-12-2023",
         campaign: "Exibe Números",
         client: "CARLOS DA SILVA ARAUJO CAVALCANTE",
         qty: 1,
         numbers: "0059",
         total: "R$ 0,30",
         status: "Pendente",
      },
      {
         id: 18,
         date: "05-12-2023",
         campaign: "Exibe Números",
         client: "CARLOS DA SILVA",
         qty: 1,
         numbers: "0010",
         total: "R$ 0,30",
         status: "Pendente",
      },
      {
         id: 17,
         date: "05-12-2023",
         campaign: "Exibe Números",
         client: "CARLOS DA SILVA",
         qty: 1,
         numbers: "0001",
         total: "R$ 0,30",
         status: "Pendente",
      },
      {
         id: 16,
         date: "05-12-2023",
         campaign: "Exibe Números",
         client: "CARLOS DA SILVA",
         qty: 1,
         numbers: "0000",
         total: "R$ 0,30",
         status: "Pendente",
      },
      {
         id: 14,
         date: "05-12-2023",
         campaign: "Exibe Números",
         client: "CARLOS DA SILVA",
         qty: 1,
         numbers: "0021",
         total: "R$ 0,30",
         status: "Pendente",
      },
   ];

   return (
      <div className="Dashboard">
         <h1 className="text-white text-3xl">Dashboard</h1>
         <div className="pt-6">
            <div className="GanhadoresCompradores flex gap-10">
               <div className="flex flex-col gap-6 bg-gray-900 w-2/5 h-36 rounded-lg p-4">
                  <p className="text-white text-sm">BUSCAR GANHADOR</p>
                  <div className="flex gap-4 items-end">
                     <div className="flex flex-col gap-1">
                        <label className="text-white" htmlFor="campaignSelect">
                           Selecione a campanha
                        </label>
                        <select
                           className="p-1 text-white max-w-48 border border-white rounded-md h-8 bg-gray-700"
                           name="campaignSelect"
                           id="campaignSelect"
                        >
                           <option value="">Selecione a campanha</option>
                           <option value="2">
                              Edição 382 - Ford Fiesta mais honda cg titan 150
                              mais 5.000 no pix
                           </option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                        </select>
                     </div>
                     <div className="flex flex-col gap-1">
                        <label className="text-white" htmlFor="drawnNumber">
                           Numero Sorteado
                        </label>
                        <input
                           className="p-2 text-white bg-gray-700 border border-white rounded h-8 outline-none"
                           type="text"
                           id="drawnNumber"
                        />
                     </div>
                     <div className="flex items-end">
                        <button className="bg-purple-500 w-16 h-8  rounded-md text-white hover:bg-purple-600 hover:scale-110">
                           Buscar
                        </button>
                     </div>
                  </div>
               </div>
               <div className="flex flex-col gap-6 bg-gray-900 w-2/5 h-36 rounded-lg p-4">
                  <p className="text-white text-sm">RANKING DE COMPRADORES</p>
                  <div className="flex gap-4 items-end">
                     <div className="flex flex-col gap-1">
                        <label className="text-white" htmlFor="campaignSelect">
                           Selecione a campanha
                        </label>
                        <select
                           className="p-1 text-white max-w-48 border border-white rounded-md h-8 bg-gray-700"
                           name="campaignSelect"
                           id="campaignSelect"
                        >
                           <option value="">Selecione a campanha</option>
                           <option value="2">
                              Edição 382 - Ford Fiesta mais honda cg titan 150
                              mais 5.000 no pix
                           </option>
                           <option value="3">3</option>
                           <option value="4">4</option>
                           <option value="5">5</option>
                        </select>
                     </div>

                     <div className="flex items-end">
                        <button className="bg-purple-500 w-16 h-8  rounded-md text-white hover:bg-purple-600 hover:scale-110">
                           Buscar
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="mt-10 flex gap-10">
               <div className="Campanhas flex items-center gap-5 w-72 h-20 bg-gray-800 p-2 rounded-md">
                  <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-green-500">
                     <BsMegaphone />
                  </div>
                  <div className="text-white">
                     <p>Campanhas</p>
                     <p>7</p>
                  </div>
               </div>
               <div className="Campanhas flex items-center gap-5 w-72 h-20 bg-gray-800 p-2 rounded-md">
                  <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-orange-500">
                     <FaUsers />
                  </div>
                  <div className="text-white">
                     <p>Compradores</p>
                     <p>7</p>
                  </div>
               </div>
               <div className="Campanhas flex items-center gap-5 w-72 h-20 bg-gray-800 p-2 rounded-md">
                  <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-blue-500">
                     <IoBagCheckOutline />
                  </div>
                  <div className="text-white">
                     <p>Pedidos</p>
                     <p>7</p>
                  </div>
               </div>
               <div className="Campanhas flex items-center gap-5 w-72 h-20 bg-gray-800 p-2 rounded-md">
                  <div className="Icon rounded-full w-10 h-10 p=2 flex items-center justify-center bg-sky-300">
                     <MdAttachMoney />
                  </div>
                  <div className="text-white">
                     <p>Faturamento</p>
                     <p>7</p>
                  </div>
               </div>
            </div>
            <div className="mt-10">
               <p className="text-white">Ultimos pedidos</p>
            </div>
         </div>
         <div className="container  pt-4">
            <table className=" bg-gray-900 text-white">
               <thead>
                  <tr className="w-full bg-gray-800 text-left">
                     <th className="py-3 px-4">ID</th>
                     <th className="py-3 px-4">DATA</th>
                     <th className="py-3 px-4">CAMPANHA</th>
                     <th className="py-3 px-4">CLIENTE</th>
                     <th className="py-3 px-4">QTD</th>
                     <th className="py-3 px-4">NÚMEROS</th>
                     <th className="py-3 px-4">TOTAL</th>
                     <th className="py-3 px-4">STATUS</th>
                  </tr>
               </thead>
               <tbody>
                  {data.map((row, index) => (
                     <tr key={index} className="border-b border-gray-700">
                        <td className="py-2 px-4">{`#${row.id}`}</td>
                        <td className="py-2 px-4">{row.date}</td>
                        <td className="py-2 px-4">{row.campaign}</td>
                        <td className="py-2 px-4">{row.client}</td>
                        <td className="py-2 px-4">{row.qty}</td>
                        <td className="py-2 px-4">{row.numbers}</td>
                        <td className="py-2 px-4">{row.total}</td>
                        <td className="py-2 px-4">
                           <span className="bg-red-500 text-white py-1 px-3 rounded-full">
                              {row.status}
                           </span>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
}
