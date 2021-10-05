import React, { useState } from 'react';
import "./Forca.css";
import usePalavraSecreta from '../../services/usePalavraSecreta';

function Forca() {
  const { palavra } = usePalavraSecreta();
  const word = palavra.split("");
  const [caractere, setCarcatere] = useState()

  function verificaCaractere() {
    var i = 0;
    var posicao = 0;
    var liEl = null;
    if (caractere !== "") {
      if (word.indexOf(caractere) !== -1) {
        while (i < word.length) {
          posicao = word.indexOf(caractere, i)
          if (posicao !== -1) {
            liEl = document.getElementById(posicao);
            liEl.innerHTML = caractere;
          }
          i++;
        }
      }
    } else {
      alert("INSIRA UMA LETRA PARA JOGAR!");
    }
  }

  function inputChangeCallBack(event) {
    setCarcatere(event.target.value)
  }

  return (
    <div className="game">
      <div className="hidden-word">
        <ul>
          {word.map((caractere, index) => {
            return <li key={index} id={index}>_</li>;
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