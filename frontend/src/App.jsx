import TopMenu from "./components/TopMenu";
import AdminPanel from "./pages/AdminPanel";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Registerform from "./pages/RegisterForm";
import { FormProvider } from "./context/FormContext";

function App() {
   const [showMenu, setShowMenu] = useState(true);

   return (
      <>
         <BrowserRouter>
            <FormProvider>
               {showMenu && <TopMenu />}
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="inicio" element={<Home />} />
                  <Route path="login" element={<LoginForm />} />
                  <Route path="cadastrar" element={<Registerform />} />
                  <Route
                     path="painel-do-administrador"
                     element={<AdminPanel onHideMenu={setShowMenu} />}
                  />
               </Routes>
            </FormProvider>
         </BrowserRouter>
      </>
   );
}

export default App;
