import React, { useState } from 'react';
import './App.css';
import PalavraSecretaPage from "../src/components/PalavraSecretaPage/PalavraSecretaPage"
import PalavraSecretaContext from "./services/PalavraSecretaContext"
import { palavraSecretaContextBuilder } from "./services/PalavraSecretaService";

function App() {
  const controlePalavraSecreta = palavraSecretaContextBuilder(useState())
  return (
    <div className="App">
      <PalavraSecretaContext.Provider value={controlePalavraSecreta}>
        <PalavraSecretaPage></PalavraSecretaPage>
      </PalavraSecretaContext.Provider>
    </div>
  );
}

export default App;
