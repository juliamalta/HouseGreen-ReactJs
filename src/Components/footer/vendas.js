import React from "react";
import "./vendas.css";
import produto1 from "../../images/produto1.png";
import produto2 from "../../images/produto2.png";
import produto3 from "../../images/produto3.png";

function Vendas() {
  return (
    <div className="vendas-plantas">
      <div className="plantas-vendas1">
        <img src={produto1} />
        <p className="nome">Ajuga reptans</p>
      </div>

      <div className="plantas-vendas2">
        <img src={produto2} />
        <p>Cordyline fruticosa</p>
      </div>

      <div className="plantas-vendas3">
        <img src={produto3} />
        <p>Crassula</p>
      </div>
    </div>
  );
}

export default Vendas;
