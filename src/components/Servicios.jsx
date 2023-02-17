import React from "react";
import "./Servicios.css";
import polygonSeccion from "../Img/Servicios/polygonSeccion.svg";
import pointGreenDark from "../Img/Servicios/pointGreenDark.png";
import ellipseWhite from "../Img/Servicios/EllipseWhite.png";
import ellipseGreen from "../Img/Servicios/EllipseGreen.png";
import triangle from "../Img/Servicios/polygon.png";
import perroCombo from "../Img/Servicios/perroCombo.svg";
import corteUñas from "../Img/Servicios/corteUñas.svg";
import oidos from "../Img/Servicios/oidos.svg";
import spa from "../Img/Servicios/spa.svg";
import arrowDate from "../Img/Servicios/arrowDate.png";

function Servicios() {
  return (
    <div className="serviciosContainer">
      <h2 className="serviciosTitle">Servicios</h2>
      <div className="serviciosElements">
        <img
          src={polygonSeccion}
          alt="Vector de separacion de colores"
          className="polygonSeccion"
        />
        <img
          src={pointGreenDark}
          alt="Puntos decorativos"
          className="pointGreenDark"
        />
        <img
          src={ellipseWhite}
          alt="Circulo decorativo"
          className="ellipseWhite"
        />
        <img
          src={ellipseGreen}
          alt="Circulo decorativo"
          className="ellipseGreen"
        />
        <img src={triangle} alt="Triangulo decorativo" className="triangle" />
        <img src={triangle} alt="Triangulo decorativo" className="triangle1" />
      </div>
      <div className="targets">
        <div className="target1">
          <div className="targetIcon">
            <img
              src={perroCombo}
              alt="Icono de perro limpio"
              className="perroCombo"
            />
          </div>
          <div className="targetText">
            <span className="targetTitle">
              Combo
              <br />
              Todo Incluido
            </span>
            <span className="targetPrice">$10.000</span>
            <span className="targetInfoadd">
              Baño + Corte + Corte de uñas + Limpieza de oídos{" "}
            </span>
            <span className="targetInfo">
              Para que la fragancia y look de tu mejor amigo sea de encanto.
            </span>
          </div>
        </div>
        <div className="target2">
          <div className="targetText">
            <span className="targetTitle">Corte de uñas</span>
            <span className="targetPrice">$10.000</span>
            <span className="targetInfo">
              Brinda comodidad y salud a tu peludo.
            </span>
          </div>
          <div className="targetIcon">
            <img
              src={corteUñas}
              alt="Icono de corta uñas"
              className="iconSmall"
            />
          </div>
        </div>
        <div className="target1">
          <div className="targetIcon">
            <img
              src={oidos}
              alt="Icono de limoieza de oidos"
              className="iconSmall"
            />
          </div>
          <div className="targetText">
            <span className="targetTitle">Limpieza de oidos</span>
            <span className="targetPrice">$10.000</span>
            <span className="targetInfo">
              Conserva la higiene y evita infecciones.
            </span>
          </div>
        </div>
        <div className="target2">
          <div className="targetText">
            <span className="targetTitle">Spa y masajes</span>
            <span className="targetPrice">$10.000</span>
            <span className="targetInfo">
              Reduce el estrés y conserva la buena salud.
            </span>
          </div>
          <div className="targetIcon">
            <img src={spa} alt="Icono de corta uñas" className="iconSmall" />
          </div>
        </div>
      </div>
      <div className="date">
        <a href="https://api.whatsapp.com/send/?phone=%2B573138502124&text=Hola%20me%20gustaria%20saber%20mas%20sobre...&type=phone_number&app_absent=0">
          <span className="dateService">Agenda tu cita</span>
        </a>
        <img src={arrowDate} alt="" className="arrowDate" />
      </div>
    </div>
  );
}

export default Servicios;
