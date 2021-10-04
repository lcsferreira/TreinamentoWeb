import React from 'react';
import "./Forca.css";
import usePalavraSecreta from '../../services/usePalavraSecreta';

function Forca() {
  const { palavra } = usePalavraSecreta();
  const word = palavra.split("");

  return (
    <div className="game">
      <div className="hidden-word">
        <ul>
          {word.map((caractere, index) => {
            return <li key={index}>_</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default Forca;