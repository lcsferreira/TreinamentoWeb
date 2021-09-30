import React, { useState } from 'react';
import Reference from "../Reference";
import "./ReferenceList.css";

function ReferenceList(props) {
  const [listaReferencia] = useState(props.listaReferencia)

  return (
    <div className="reference-list">
      <hr />
      <h2>REFERÊNCIAS</h2>
      {
        listaReferencia.map((item, i) => (
          <Reference key={i} referencia={item}></Reference>
        ))
      }
    </div>
  );
}

export default ReferenceList;