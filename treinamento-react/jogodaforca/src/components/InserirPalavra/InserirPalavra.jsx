import React, { useState } from 'react';
import "./InserirPalavra.css";
import usePalavraSecreta from "../../services/PalavraSecreta/usePalavraSecreta";
import useIsPlaying from '../../services/IsPlaying/useIsPlaying';
import Forca from "../Forca/Forca"

function InserirPalavra() {
  const { addPalavra } = usePalavraSecreta();
  const { iniciarJogo } = useIsPlaying()
  const [novaPalavra, setNovaPalavra] = useState("");

  function inputChangeCallBack(event) {
    setNovaPalavra(event.target.value);
  }

  function iniciaJogo() {
    if (novaPalavra === "") {
      alert("INSIRA UMA PALAVRA");
      return;
    }
    iniciarJogo(<Forca></Forca>)
    addPalavra(novaPalavra);
  }

  return (
    <div className="secret-word-menu">
      <h1>JOGO DA FORCA</h1>
      <h2>BEM VINDO!</h2>
      <p>Insira uma palavra para ser adivinhada!</p>
      <div className="secret-word-input">
        <label htmlFor="palavra-secreta">Palavra Secreta: </label>
        <input type="text" name="palavra-secreta" onChange={inputChangeCallBack} />
      </div>
      <div className="buttons">
        <button type="submit" onClick={iniciaJogo}>COMEÇAR JOGO</button>
      </div>
    </div>
  );
}

export default InserirPalavra;