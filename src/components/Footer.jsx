import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="columns">
        <ul className="nav">
          <li className="columnTitle">Navegación</li>
          <li>Inicio</li>
          <li>Conócenos</li>
          <li>Servicios</li>
          <li>Productos</li>
          <li>Contacto</li>
        </ul>
        <div>
          <a href="https://api.whatsapp.com/send/?phone=%2B573138502124&text=Hola%20me%20gustaria%20saber%20mas%20sobre...&type=phone_number&app_absent=0">
            <button className="button">Agenda Cita</button>
          </a>
        </div>
      </div>
      <span>Copyright © 2023 Colmillo Blanco </span>
    </div>
  );
}

export default Footer;
