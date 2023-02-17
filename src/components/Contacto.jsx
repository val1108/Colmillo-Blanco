import React from "react";
import "./Contacto.css";
import polygonContact from "../Img/Contacto/polygonSeccion.svg";
import logDireccion from "../Img/Contacto/logDireccion.svg";
import logWhatsapp from "../Img/Contacto/logWhatsapp.svg";
import logInstagram from "../Img/Contacto/logInstagram.svg";

function Contacto() {
  return (
    <div className="contactoContainer">
      <img src={polygonContact} alt="" className="seccionContact" />
      <h2>Contacto</h2>
      <div className="contactos">
        <div className="links">
          <img src={logWhatsapp} alt="logo Whatsapp" />
          <a href="https://api.whatsapp.com/send/?phone=%2B573138502124&text=Hola%20me%20gustaria%20saber%20mas%20sobre...&type=phone_number&app_absent=0">
            <span>+57 3245374595</span>
          </a>
        </div>
        <div className="links">
          <img src={logInstagram} alt="logo instagram" />
          <a href="https://www.instagram.com/santi_mola_20/">
            <span>santi_mola_20</span>
          </a>
        </div>
        <div className="links">
          <img src={logDireccion} alt="logo direccion" />
          <a href="https://www.google.com/maps/search/5.021355,+-75.622108?shorturl=1">
            <span>Palestina, Caldas Carrera 4 #8-35</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
