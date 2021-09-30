import React, { useState } from 'react';
import Hability from "../Hability";
import "./HabilityList.css"

function HabilityList(props) {
  const [listaHabilidades] = useState(props.listaHabilidades)

  return (
    <div className="hability-list">
      <hr />
      <h2>HABILIDADES</h2>
      {
        listaHabilidades.map((item, i) => (
          <Hability key={i} habilidade={item}></Hability>
        ))
      }
    </div>

  );
}

export default HabilityList;