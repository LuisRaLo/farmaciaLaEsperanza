import React from "react";
import { Route, Routes } from "react-router-dom";
import AltasScreen from "../pages/Customers/AltasScreen";
import MenuCustomersPage from "../pages/Customers/MenuCustomersPage";

const CustomerNavigation = () => {
  return (
    <Routes>
      <Route path="/" element={<MenuCustomersPage />} />
      <Route path="/socios" element={<AltasScreen />} />
    </Routes>
  );
};

export default CustomerNavigation;
