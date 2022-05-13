import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import C404Page from "./pages/Codes/C404Page";
import AltasScreen from "./pages/Customers/AltasScreen";
import MenuCustomersPage from "./pages/Customers/MenuCustomersPage";
import DashboardPage from "./pages/Home/DashboardPage";
import CotizacionPage from "./pages/Laboratory/CotizacionPage";
import MenuServicesPage from "./pages/Services/MenuServicesPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* CUSTOMERS */}
        <Route path="/customers" element={<MenuCustomersPage />} />
        <Route path="/customers/socios" element={<AltasScreen />} />

        {/* SERVICES */}
        <Route path="/services" element={<MenuServicesPage />} />

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
