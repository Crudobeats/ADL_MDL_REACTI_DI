import React from "react";
import CardComponents from "./Card";

import Image1 from "../src/img-1.jpg";
import Image2 from "../src/img-2.jpg";
import Image3 from "../src/img-3.jpg";
import Image4 from "../src/img-4.jpg";
import Image5 from "../src/img-5.jpg";


const Cards = () => {
  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
            <div className="col-md-4">
            <CardComponents Src={Image1} Titulo={"Homero Simpson"}Descripcion={"Esposo de Marge, Padre de Bart, Lisa y Maggie, Amante de la Cerveza"} />
            </div>
            <div className="col-md-4">
            <CardComponents Src={Image2} Titulo={"Marge Simpson"} Descripcion={"Esposa de Homero, Madre de Bart, Lisa y Maggie, Ama de Casa, Ama la cocina"} />
            </div>
            <div className="col-md-4">
            <CardComponents Src={Image3} Titulo={"Bart Simpson"} Descripcion={"Hijo de Homero y Marge, Hermano de Lisa y Maggie, Cowabunga Viejo!"} />
            </div>
            <div className="col-md-4">
            <CardComponents Src={Image4} Titulo={"Lisa Simpson"} Descripcion={"Hija de Homero y Marge, Hermana de Bart y Maggie, Amante del Jazz, Vegetariana"} />
            </div>
            <div className="col-md-4">
            <CardComponents Src={Image5} Titulo={"Maggie Simpson"} Descripcion={"Hija de Homero y Marge, Hermana de Bart y Lisa, La más pequeña del Clan Simpson"} />
            </div>
      </div>
    </div>
  );
};

export default Cards;
