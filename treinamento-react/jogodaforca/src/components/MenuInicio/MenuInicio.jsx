import React from 'react';
import useIsPlaying from "../../services/IsPlaying/useIsPlaying"
import InserirPalavra from '../InserirPalavra';

function MenuInicio() {
  const { iniciarJogo } = useIsPlaying()

  function showInserirPalavra() {
    iniciarJogo(<InserirPalavra />)
  }

  return (
    <div>
      <h1>JOGO DA FORCA</h1>
      <div className="buttons">
        <button type="submit" onClick={showInserirPalavra}>INICIAR</button>
      </div>
    </div>
  );
}

export default MenuInicio;