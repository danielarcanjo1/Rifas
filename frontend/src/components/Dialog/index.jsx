
export const index = (props) => {
  return (
    <div
               className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50`}
            >
               <div className="bg-white p-6 rounded shadow-lg">
                  <h2 className={`text-xl font-semibold ${isError ? "text-red-500" : "text-green-500"}`}>
                     {isError ? "Erro" : "Sucesso"}
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
  )
}
