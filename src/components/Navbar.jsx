import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../Img/LogoColmillo.svg";
import flecha from "../Img/Inicio/flechaMenu.png";
import logDireccion from "../Img/Contacto/logDireccion.png";
import logWhatsapp from "../Img/Contacto/logWhatsapp.png";
import logInstagram from "../Img/Contacto/logInstagram.png";
function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbarContainer">
      <div className="navLogo">
        <img src={logo} alt="Logo Colmillo Blanco" />
      </div>
      <div
        className={`navToggle ${open && "open"}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`navItems ${open && "open"}`}>
        <img
          className="flecha"
          onClick={() => setOpen(!open)}
          src={flecha}
          alt="Flecha para cerrar menu"
        />
        <Link
          className="menuText"
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <span>Inicio</span>
        </Link>
        <Link
          className="menuText"
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <span>Conócenos</span>
        </Link>
        <Link
          className="menuText"
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <span>Servicios</span>
        </Link>
        <Link
          className="menuText"
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <span>Productos</span>
        </Link>
        <Link
          className="menuText"
          activeClass="active"
          to=""
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <span>Contacto</span>
        </Link>
        <div className="iconsMenu">
          <a
            className="iconItem"
            href="https://www.google.com/maps/search/5.021355,+-75.622108?shorturl=1"
          >
            <img src={logDireccion} alt="Logo de direccion" />
          </a>
          <a
            className="iconItem"
            href="https://api.whatsapp.com/send/?phone=%2B573138502124&text=Hola%20me%20gustaria%20saber%20mas%20sobre...&type=phone_number&app_absent=0"
          >
            <img src={logWhatsapp} alt="Logo de whatsapp" />
          </a>
          <a
            className="iconItem"
            href="https://www.instagram.com/santi_mola_20/"
          >
            <img src={logInstagram} alt="Logo de instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
