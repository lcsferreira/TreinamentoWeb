import React, { useState } from 'react'
import "./Experience.css";

function Experience(props) {
  const [experiencia] = useState(props.experiencia)
  return (
    <div className="experience-info">
      <h3>{experiencia.local}</h3>
      <h4>{experiencia.funcao} | {experiencia.dataInicio} - {experiencia.dataFim}</h4>
      <div className="desc">
        <div className="vl"></div>
        <p>{experiencia.descricao}</p>
      </div>
    </div>
  );
}

export default Experience;
