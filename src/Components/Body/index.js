import React from "react";
import "./style.css";
import img1 from "../../images/img1.png";
import { useState } from "react";
import { toast } from "react-toastify";

function Main() {
  const [datos, setDatos] = useState({
    UserEmail: "",
  });

  function handleInputChange(event) {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando dados" + datos.UserEmail);
    toast.success(
      "Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " +datos.UserEmail
    );
  };

  return (
    <div className="container">
      <div className="plantasdesc">
        <p className="desc1">Sua casa com as</p>
        <h1 className="desc2">
          melhores <br /> plantas
        </h1>
        <p className="desc3">
          Encontre aqui uma vasta seleção de plantas para decorar a<br /> sua
          casa e torná-lo uma pessoa mais feliz no seu dia a dia.
          <br /> Entre com seu e-mail e assine nossa newsletter para saber
          <br /> das novidades da marca.
        </p>

        <form onSubmit={enviarDatos}>
       
          <input
            type="text"
            name="UserEmail"
            placeholder="Insira Seu Email"
            onChange={handleInputChange}
            className="input1"
          />
       
          <button type="submit" className="botao">
            Assinar newsletter
          </button>
        
        </form>
    
      </div>

      <div className="img">
        <img src={img1} />
      </div>
    </div>
  );
}

export default Main;
