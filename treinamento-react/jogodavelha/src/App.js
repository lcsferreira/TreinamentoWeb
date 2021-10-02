import './App.css';
import React, { useState } from 'react';
import TabuleiroContext from './services/Tabuleiro/TabuleiroContext';
import { tabuleiroContextBuilder } from './services/Tabuleiro/TabuleiroService';
import TabuleiroPage from './components/TabuleiroPage/TabuleiroPage';
import { rodadaContextBuilder } from "./services/Rodada/RodadaService";
import RodadaContext from "./services/Rodada/RodadaContext";

function App() {
  const controleDoTabuleiro = tabuleiroContextBuilder(useState([0, 0, 0, 0, 0, 0, 0, 0, 0]));
  const controleDaRodada = rodadaContextBuilder(useState(1));

  return (
    <div className="App">
      <div className="tabuleiro">
        <h1>JOGO DA VELHA</h1>
        <TabuleiroContext.Provider value={controleDoTabuleiro}>
          <RodadaContext.Provider value={controleDaRodada}>
            <TabuleiroPage></TabuleiroPage>
          </RodadaContext.Provider>
        </TabuleiroContext.Provider>
      </div>
    </div>
  );
}

export default App;
