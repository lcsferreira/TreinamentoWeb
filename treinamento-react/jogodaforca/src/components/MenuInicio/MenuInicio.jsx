import React from 'react';
import "./MenuInicio.css"
import useIsPlaying from "../../services/IsPlaying/useIsPlaying"
import InserirPalavra from '../InserirPalavra';

function MenuInicio() {
  const { iniciarJogo } = useIsPlaying()

  function showInserirPalavra() {
    iniciarJogo(<InserirPalavra />)
  }

  return (
    <div className="secret-word-menu">
      <h1>JOGO DA FORCA</h1>
      <div className="buttons">
        <button type="submit" onClick={showInserirPalavra}>INICIAR</button>
      </div>
    </div>
  );
}

export default MenuInicio;