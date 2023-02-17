import React from "react";
import "./Conocenos.css";
import groomer from "../Img/Conocenos/groomer.svg";
import pointOrange from "../Img/Conocenos/pointOrange.png";
import pointGreen from "../Img/Conocenos/pointGreen.png";
import vector from "../Img/Conocenos/vector.png";

function Conocenos() {
  return (
    <div className="conocenosContainer">
      <div className="conocenosText">
        <h2>Conócenos</h2>
        <img src={groomer} alt="Groomer" className="groomerImg" />
        <p>
          Somos una familia amante de los animales, por tanto, a lo largo de los
          años nos hemos preocupado por capacitarnos para darles el mejor
          cuidado posible.
          <br />
          <br /> Sabemos que con su gran amor y travesuras nuestros peluditos se
          ganan un lugar muy importante en cada familia, por eso queremos
          brindarles un espacio donde sean consentidos y queden como los reyes
          que son en nuestro corazón.
        </p>
      </div>
      <div className="conocenosElements">
        <img
          src={pointOrange}
          alt="Puntos naranja decorativos"
          className="pointOrange"
        />
        <img
          src={pointGreen}
          alt="Puntos verde decorativos"
          className="pointGreen"
        />
        <img src={vector} alt="Vector decorativo" className="vector" />
      </div>
    </div>
  );
}

export default Conocenos;
