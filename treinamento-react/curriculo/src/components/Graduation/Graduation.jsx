import React, { useState } from 'react';
import './Graduation.css'

function Graduation(props) {
  const [formacao] = useState(props.formacao)

  return (
    <div className="graduation-info">
      <h3>{formacao.curso} <span>{formacao.dataInicio} - {formacao.dataFinal}</span></h3>
      <div className="graduation-locale">
        <div className="vl"></div>
        <p>{formacao.local}</p>
      </div>
    </div>
  );
}

export default Graduation;