import React, { useState } from 'react';
import './App.css';
import PalavraSecretaPage from "../src/components/PalavraSecretaPage/PalavraSecretaPage"
import PalavraSecretaContext from "./services/PalavraSecreta/PalavraSecretaContext"
import IsPlayingContext from "./services/IsPlaying/IsPlayingContext"
import { palavraSecretaContextBuilder } from "./services/PalavraSecreta/PalavraSecretaService";
import { isPlayingContextBuilder } from "./services/IsPlaying/IsPlayingService"
import MenuInicio from './components/MenuInicio/MenuInicio';

function App() {
  const controlePalavraSecreta = palavraSecretaContextBuilder(useState())
  const controleDoJogo = isPlayingContextBuilder(useState([<MenuInicio></MenuInicio>]))
  return (
    <div className="App">
      <PalavraSecretaContext.Provider value={controlePalavraSecreta}>
        <IsPlayingContext.Provider value={controleDoJogo}>
          <PalavraSecretaPage></PalavraSecretaPage>
        </IsPlayingContext.Provider>
      </PalavraSecretaContext.Provider>
    </div>
  );
}

export default App;
