import React from "react";
import { Route, Routes } from "react-router-dom";
import FormularioRecetaPage from "../pages/Services/Medico/FormularioRecetaPage";
import MenuServicesPage from "../pages/Services/MenuServicesPage";

const FarmaciaNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuServicesPage />} />

      <Route path="medico/consulta" element={<FormularioRecetaPage />} />
    </Routes>
  );
};

export default FarmaciaNavigation;
