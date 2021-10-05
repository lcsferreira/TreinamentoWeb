import React, { useState } from 'react';
import "./Forca.css";
import usePalavraSecreta from '../../services/usePalavraSecreta';

function Forca() {
  const { palavra } = usePalavraSecreta();
  const word = palavra.split("");
  const [caractere, setCaractere] = useState()
  var [erros, setErros] = useState(0);

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
      } else {
        erros += 1;
        setErros(erros);
        if (erros === 1) {
          const imgEl = document.querySelector('#cabeca');
          imgEl.style.display = "block"
        } else if (erros === 2) {
          const imgEl = document.querySelector('#corpo');
          imgEl.style.display = "block"
        } else if (erros === 3) {
          const imgEl = document.querySelector('#bracoEsq');
          imgEl.style.display = "block"
        } else if (erros === 4) {
          const imgEl = document.querySelector('#bracoDir');
          imgEl.style.display = "block"
        } else if (erros === 5) {
          const imgEl = document.querySelector('#pernaEsq');
          imgEl.style.display = "block"
        } else if (erros === 6) {
          const imgEl = document.querySelector('#pernaDir');
          imgEl.style.display = "block"
        }
      }
    } else {
      alert("INSIRA UMA LETRA PARA JOGAR!");
    }
  }

  function inputChangeCallBack(event) {
    setCaractere(event.target.value)
  }

  return (
    <div className="game">
      <div className="forca">
        <img src="https://www.soportugues.com.br/secoes/jogos/forca/img/1.gif" alt="forca" id="forca"></img>
        <img src="https://www.pikpng.com/pngl/m/40-403600_smiley-emoticon-sadness-face-drawing-stick-figure-head.png"
          alt="cabeca" id="cabeca" className="boneco"></img>
        <img src="https://s.pngkit.com/png/small/106-1061863_vertical-line-png-vertical-line-svg.png" alt="corpo"
          id="corpo" className="boneco"></img>
        <img src="https://s.pngkit.com/png/small/106-1061863_vertical-line-png-vertical-line-svg.png" alt="bracoEsq"
          id="bracoEsq" className="boneco"></img>
        <img src="https://s.pngkit.com/png/small/106-1061863_vertical-line-png-vertical-line-svg.png" alt="bracoDir"
          id="bracoDir" className="boneco"></img>
        <img src="https://s.pngkit.com/png/small/106-1061863_vertical-line-png-vertical-line-svg.png" alt="pernaDir"
          id="pernaDir" className="boneco"></img>
        <img src="https://s.pngkit.com/png/small/106-1061863_vertical-line-png-vertical-line-svg.png" alt="pernaEsq"
          id="pernaEsq" className="boneco"></img>
      </div>
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