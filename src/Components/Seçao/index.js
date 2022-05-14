import React from "react";
import image3 from "./image3.png";
import "./session.css";

function Session() {
  return (
    <div className="plantinha">
      <img className="plantinhaimg" src={image3} />

      <div className="text">
        <p className="vendaplantinha">Como conseguir </p>
        <p className="minhaplantinha">minha planta</p>
        <ul>
          <li>Escolhas suas plantas</li>
          <li>Faça seu pedido</li>
          <li>Aguarde na sua casa</li>
        </ul>
      </div>
    </div>
  );
}

export default Session;
