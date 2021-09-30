import React, { useState } from 'react';
import "./Hability.css";

function Hability(props) {
  const [habilidade] = useState(props.habilidade);
  let levels = [];
  for (let i = 0; i < 10; i++) {
    if (i >= habilidade.nivel) {
      levels.push(<div className="level-fill" key={i}></div>)
    } else {
      levels.push(<div className="level" key={i}></div>)
    }
  }

  return (
    <div className="hability-info">
      <h4>{habilidade.titulo}: </h4>
      <div className="hability-level">
        {levels}
      </div>
    </div>
  );
}

export default Hability;