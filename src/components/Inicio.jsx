import React from "react";
import "./Inicio.css";
import buttonHuella from "../Img/Inicio/buttonHuella.png";
import perroInicio from "../Img/Inicio/perroInicio.svg";
import vectorOla from "../Img/Inicio/vectorOla.svg";
import burbuja from "../Img/Inicio/burbuja.png";
import burbuja1 from "../Img/Inicio/burbuja1.png";
import burbuja2 from "../Img/Inicio/burbuja2.png";
import burbuja3 from "../Img/Inicio/burbuja3.png";
import peine from "../Img/Inicio/peine.png";
import tijera from "../Img/Inicio/tijeras.png";

function Inicio() {
  return (
    <div className="homeContainer">
      <div className="homeText">
        <h1>Consiente a tu mejor amigo</h1>
        <h2>Brindándole los mejores servicios de</h2>
        <span className="boldDark">Colmillo</span>
        <span className="boldLight">Blanco</span>
      </div>
      <div className="homeButtons">
        <a href="https://api.whatsapp.com/send/?phone=%2B573138502124&text=Hola%20me%20gustaria%20saber%20mas%20sobre...&type=phone_number&app_absent=0">
          <button className="homeDate">Agenda tu cita</button>
        </a>
        <div className="buttonFoot">
          <img src={buttonHuella} alt="Boton forma de huella" />
        </div>
      </div>
      <div className="homeElements">
        <img
          src={perroInicio}
          alt="Perro elegante decoracion"
          className="dogHome"
        />
        <img
          src={vectorOla}
          alt="Vector decorativo en forma de ola"
          className="vectorWave"
        />
        <img
          src={burbuja}
          alt="Vector decorativo de burbuja"
          className="bubble1"
        />
        <img
          src={burbuja}
          alt="Vector decorativo de burbuja"
          className="bubble2"
        />
        <img
          src={burbuja}
          alt="Vector decorativo de burbuja"
          className="bubble3"
        />
        <img
          src={burbuja1}
          alt="Vector decorativo de burbuja"
          className="bubble4"
        />
        <img
          src={burbuja1}
          alt="Vector decorativo de burbuja"
          className="bubble5"
        />
        <img
          src={burbuja1}
          alt="Vector decorativo de burbuja"
          className="bubble6"
        />
        <img
          src={burbuja2}
          alt="Vector decorativo de burbuja"
          className="bubble7"
        />
        <img
          src={burbuja3}
          alt="Vector decorativo de burbuja"
          className="bubble8"
        />
        <img src={peine} alt="Vector decorativo de burbuja" className="comb" />
        <img
          src={tijera}
          alt="Vector decorativo de burbuja"
          className="scissors"
        />
      </div>
    </div>
  );
}

export default Inicio;
