import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import C404Page from "./pages/Codes/C404Page";
import DashboardPage from "./pages/Home/DashboardPage";

import CustomerNavigation from "./routes/customers.routes";
import FarmaciaNavigation from "./routes/farmacia.routes";
import LaboratoryNavigation from "./routes/laboratory.routes";
import ServicesNavigation from "./routes/services.routes";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />

        {/* CUSTOMERS */}
        <Route path="/customers" element={<CustomerNavigation />} />

        {/* SERVICES */}
        <Route path="/services" element={<ServicesNavigation />} />

        {/* PHARMACY */}
        <Route path="/pharmacy" element={<FarmaciaNavigation />} />

        {/* LABORATORIES */}
        <Route path="/laboratory" element={<LaboratoryNavigation />} />

        <Route path="*" element={<C404Page />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
