import React, { useState } from 'react';
import "./Forca.css";
import usePalavraSecreta from '../../services/usePalavraSecreta';

function Forca() {
  const { palavra } = usePalavraSecreta();
  const word = palavra.split("");
  const [caractere, setCarcatere] = useState()

  function verificaCaractere() {

  }

  function inputChangeCallBack(event) {
    setCarcatere(event.target.value)
  }

  return (
    <div className="game">
      <div className="hidden-word">
        <ul>
          {word.map((caractere, index) => {
            return <li key={index}>_</li>;
          })}
        </ul>
      </div>
      <div className="game-inputs">
        <input type="text" onChange={inputChangeCallBack} />
        <button type="submit" onClick={verificaCaractere}>JOGAR</button>
      </div>
    </div>
  );
}

export default Forca;