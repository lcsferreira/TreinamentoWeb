import './App.css';
import React, { useState } from 'react';
import TabuleiroContext from './services/Tabuleiro/TabuleiroContext';
import { tabuleiroContextBuilder } from './services/Tabuleiro/TabuleiroService';
import TabuleiroPage from './components/TabuleiroPage/TabuleiroPage';

function App() {
  const controleDoTabuleiro = tabuleiroContextBuilder(useState([0, 0, 0, 0, 0, 0, 0, 0, 0], 1));
  return (
    <div className="App">
      <div className="tabuleiro">
        <h1>JOGO DA VELHA</h1>
        <TabuleiroContext.Provider value={controleDoTabuleiro}>
          <TabuleiroPage></TabuleiroPage>
        </TabuleiroContext.Provider>
      </div>
    </div>
  );
}

export default App;
