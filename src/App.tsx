import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import FormularioRecetaPage from "./pages/FormularioRecetaPage";

const Home = () => <div>Home</div>;
const About = () => <div>About</div>;

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="formulario-receta" element={<FormularioRecetaPage />} />
        <Route path="receta" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
