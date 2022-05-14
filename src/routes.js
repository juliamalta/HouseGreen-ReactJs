import { BrowserRouter, Routes, Route } from "react-router-dom";

import Menu from "./Components/Menu";
import Main from "./Components/Body";
import Session from "./Components/Seçao";
import Compras from "./Components/footer";
import Vendas from "./Components/footer/vendas";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Menu />
      <Main />
      <Session />
      <Compras />
      <Vendas />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
