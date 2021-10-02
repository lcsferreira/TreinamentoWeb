import React, { useState } from 'react';
import Tabuleiro from '../Tabuleiro/Tabuleiro';
import useTabuleiro from "../../services/Tabuleiro/useTabuleiro";
import "./TabuleiroPage.css"
import useRodada from "../../services/Rodada/useRodada";

function TabuleiroPage() {
  const { limpaTabuleiro } = useTabuleiro();
  const { resetaJogador } = useRodada();
  const [tabuleiro, setTabuleiro] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  function resetaGame() {
    limpaTabuleiro();
    resetaJogador();
    setTabuleiro();
    setIsPlaying(false);
  }

  function showTabuleiro() {
    setTabuleiro(<Tabuleiro></Tabuleiro>);
    setIsPlaying(true);
  }

  return (
    <div className="tabuleiro-page">
      {tabuleiro}
      <div className="game-buttons">
        <button onClick={showTabuleiro} disabled={isPlaying}>INICIAR</button>
        <button onClick={resetaGame} disabled={!isPlaying}>REINICIAR</button>

      </div>
    </div>
  )

}

export default TabuleiroPage;