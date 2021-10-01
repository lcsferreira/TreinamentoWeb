import React from 'react';
import Tabuleiro from '../Tabuleiro/Tabuleiro';
import useTabuleiro from "../../services/Tabuleiro/useTabuleiro";
import "./TabuleiroPage.css"

function TabuleiroPage() {
  const { limpaTabuleiro } = useTabuleiro();

  return (
    <div className="tabuleiro-page">
      <Tabuleiro></Tabuleiro>
      <div className="game-buttons">
        <button>INICIAR</button>
        <button onClick={limpaTabuleiro}>REINICIAR</button>
      </div>
    </div>
  )

}

export default TabuleiroPage;