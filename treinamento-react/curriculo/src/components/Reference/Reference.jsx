import React, { useState } from 'react';
import "./Reference.css"
  ;
function Reference(props) {
  const [referencia] = useState(props.referencia);

  return (
    <div className="reference-info">
      <h4>{referencia.nome}</h4>
      <p>{referencia.funcao}, {referencia.local}</p>
      <p>{referencia.telefone}</p>
    </div>
  );
}

export default Reference;