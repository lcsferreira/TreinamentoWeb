import React, { useState } from 'react';

import "./PalavraSecretaPage.css"
import usePalavraSecreta from '../../services/usePalavraSecreta';

function PalavraSecretaPage() {
  const { palavra, inserirPalavra } = usePalavraSecreta();
  const [isPlaying, setIsPlaying] = useState(false);
  const [buttonText, setButtonText] = useState("INICIAR");
  const [novaPalavra, setNovaPalavra] = useState("");

  function inputChangeCallBack(event) {
    setNovaPalavra(event.target.value);
  }

  const [game, setGame] = useState(
    <div>
      <h1>JOGO DA FORCA</h1>
    </div>
  )

  const secretWord = <div>
    <h1>JOGO DA FORCA</h1>
    <h2>BEM VINDO!</h2>
    <p>Insira uma palavra para ser adivinhada!</p>
    <div className="secret-word-input">
      <label htmlFor="palavra-secreta">Palavra Secreta: </label>
      <input type="text" name="palavra-secreta" onChange={inputChangeCallBack} />
    </div>
  </div>;


  function showGame() {
    setGame(secretWord);
    setButtonText("COMEÇAR JOGO")
    setIsPlaying(true);
  }

  function iniciaGame() {
    inserirPalavra(novaPalavra);
  }

  return (
    <div className="secret-word-menu">
      {game}
      <div className="buttons">
        <button type="submit" onClick={isPlaying ? iniciaGame : showGame} value={palavra}>{buttonText}</button>
      </div>
    </div>
  );
}

export default PalavraSecretaPage;