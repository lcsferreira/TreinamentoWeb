import React, { useState } from 'react'
import Graduation from "../Graduation";
import "./GraduationList.css";

function GraduationList(props) {

  const [listaFormacao] = useState(props.listaFormacao)

  return (
    <div className="graduation-list">
      <hr />
      <h2>FORMAÇÃO</h2>
      {
        listaFormacao.map((item, i) => (
          <Graduation key={i} formacao={item} />
        ))
      }
    </div>
  )
}

export default GraduationList;

