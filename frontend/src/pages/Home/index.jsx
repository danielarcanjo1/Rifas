import Campaign from "../../components/Campaign";

export default function Home() {
   return (
      <div className="flex flex-col justify-center items-center w-full h-full bg-sky-100 md:flex-row ">
         <div className="flex flex-col  p-4 border-r-4  ">
            <div>
            <h1 className="text-2xl mb-4">Ultimos ganhadores</h1>
            </div>
            <div>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
               <p>Wilton daniel arcanjo silva</p>
            </div>
         </div>

         <div className="flex flex-col justify-center items-center p-4 w-3/5">
            <div>
               <h1 className="text-3xl text">Campanhas</h1>
               <Campaign/>
            </div>
         </div>

         <div className="flex flex-col justify-center items-center p-4 border-l-4 ">
            <div>
            <h1 className="text-xl">Campanhas encerradas</h1>
            </div>
            <div></div>
         </div>
      </div>
   );
}
