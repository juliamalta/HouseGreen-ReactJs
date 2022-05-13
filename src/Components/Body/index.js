
import React from "react";
import './style.css';
import img1 from '../../images/img1.png';
import {useState} from 'react';
import {  toast } from 'react-toastify';

function Main() {






function assinatura(){
 toast.success("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ")
}




  return (
 <div className="container">
     <div className="plantasdesc">
     <p className="desc1">Sua casa com as</p>
<h1 className="desc2">melhores <br/> plantas</h1>
<p className="desc3">Encontre aqui uma vasta seleção de plantas para decorar a<br/>  sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.<br/>  Entre com seu e-mail e assine nossa newsletter para saber<br/>  das novidades da marca.</p>
<div className="assinatura">
<input  className="input1" type="text" name="UserEmail" id="userEmail" placeholder="Insira Seu Email" /><button className="botao" onClick={assinatura}>Assinar  newsletter</button>
</div>
</div>




    <div className="img">
 
 
    <img src={img1}/>

    </div>
    
    
    </div>

 
  )
}

export default Main;
