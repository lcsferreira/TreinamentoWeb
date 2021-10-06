import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import ConversaPage from './pages/ConversaPage';
import MenuPageTemplate from './pageTemplates/MenuPageTemplate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuPageTemplate></MenuPageTemplate>
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
