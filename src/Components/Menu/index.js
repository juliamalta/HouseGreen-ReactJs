import React from "react";
import "./cabecalho.css";
import icone from "./icone.svg";

function Menu() {
  return (
    <div className="cabecalho">
      <div className="logo1">
        <img src={icone} />
      </div>
      <nav className="principal">
        <a>Como Fazer</a>/<a>Ofertas</a>/<a>Depoimentos </a>/<a>Videos</a>/
        <a>Meu carrinho</a>
      </nav>
    </div>
  );
}

export default Menu;
