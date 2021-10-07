import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ContatosPage from './pages/ContatosPage/ContatosPage';
import ConversaPage from './pages/ConversaPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ContatosPage></ContatosPage>
        <Switch>
          <Route path="/conversa/:id" exact={true}>
            <ConversaPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
