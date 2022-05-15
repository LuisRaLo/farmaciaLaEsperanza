import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigInPage from "./pages/Auth/SigInPage";
import C404Page from "./pages/Codes/C404Page";
import AltasScreen from "./pages/Customers/AltasScreen";
import MenuCustomersPage from "./pages/Customers/MenuCustomersPage";
import DashboardPage from "./pages/Home/DashboardPage";
import CotizacionPage from "./pages/Laboratory/CotizacionPage";
import FormularioRecetaPage from "./pages/Services/Medico/FormularioRecetaPage";
import MenuServicesPage from "./pages/Services/MenuServicesPage";

const App: React.FC = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* Auth */}
        <Route path="/signin" element={<SigInPage />} />

        {/* CUSTOMERS */}
        <Route path="/customers" element={<MenuCustomersPage />} />
        <Route path="/customers/socios" element={<AltasScreen />} />

        {/* SERVICES */}
        <Route path="/services" element={<MenuServicesPage />} />
        <Route path="/services/medico/consulta-medica" element={<FormularioRecetaPage />} />
        

        {/* PHARMACY */}
        <Route path="/pharmacy" element={<MenuServicesPage />} />

        {/* LABORATORIES */}
        <Route path="/laboratory" element={<CotizacionPage />} />

        <Route path="*" element={<C404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
