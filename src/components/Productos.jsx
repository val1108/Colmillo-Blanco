import React from "react";
import "./Productos.css";
import perfumes from "../Img/Productos/perfumes.svg";
import ropa from "../Img/Productos/ropa.svg";
import accesorios from "../Img/Productos/accesorios.svg";
import aseo from "../Img/Productos/aseo.svg";
import Arrowblue from "../Img/Productos/ArrowBlue.png";
import polygonSeccion from "../Img/Productos/polygonSeccion.svg";

function Productos() {
  return (
    <div className="productosContainer">
      <h2>Productos</h2>
      <img
        src={polygonSeccion}
        alt="Vector decorativo"
        className="seccionProducts"
      />

      <div className="opcions">
        <div className="item">
          <img src={perfumes} alt="Icono perfumes" className="itemImg" />
          <span>Perfumes</span>
          <img src={Arrowblue} alt="Icono flecha" className="arrowBlue" />
        </div>
        <div className="item">
          <img src={ropa} alt="Icono ropa" className="itemImg" />
          <span>Ropa</span>
          <img src={Arrowblue} alt="Icono flecha" className="arrowBlue" />
        </div>
        <div className="item">
          <img src={accesorios} alt="Icono Accesorios" className="itemImg" />
          <span>Accesorios</span>
          <img src={Arrowblue} alt="Icono flecha" className="arrowBlue" />
        </div>
        <div className="item">
          <img src={aseo} alt="Icono aseo" className="itemImg" />
          <span>Aseo</span>
          <img src={Arrowblue} alt="Icono flecha" className="arrowBlue" />
        </div>
      </div>
    </div>
  );
}

export default Productos;
