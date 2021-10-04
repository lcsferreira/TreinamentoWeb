import React, { useState } from 'react';
import Forca from '../Forca/Forca';
import "./PalavraSecretaPage.css";
import usePalavraSecreta from '../../services/usePalavraSecreta';

function PalavraSecretaPage() {
  const { palavra, inserirPalavra } = usePalavraSecreta();
  const [isPlaying, setIsPlaying] = useState(false);
  const [novaPalavra, setNovaPalavra] = useState("");
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

  function inputChangeCallBack(event) {
    setNovaPalavra(event.target.value);
  }

  function showGame() {
    setGame(secretWord);
    const botaoInicia = document.querySelector('.buttons button')
    botaoInicia.innerHTML = "COMEÇAR JOGO";
    setIsPlaying(true);
  }

  function iniciaGame() {
    if (novaPalavra === "") {
      alert("INSIRA UMA PALAVRA")
      return;
    }
    inserirPalavra(novaPalavra);
    const botaoInicia = document.querySelector('.buttons')
    botaoInicia.style.display = "none";
    setGame(<Forca></Forca>)
  }

  return (
    <div className="secret-word-menu">
      {game}
      <div className="buttons">
        <button type="submit" onClick={isPlaying ? iniciaGame : showGame} value={palavra}>INICIAR</button>
      </div>
    </div>
  );
}

export default PalavraSecretaPage;