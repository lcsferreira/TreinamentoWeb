import { BrowserRouter, Switch, Route } from "react-router-dom";
import ForenecedorPage from "./pages/FornecedorPage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import HomePage from "./pages/HomePage/HomePage";
import ProdutosPage from "./pages/ProdutosPage";
import MenuPageTemplate from "./pageTemplates/MenuPageTemplate";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuPageTemplate>
          <Switch>
            <Route path="/" exact={true}>
              <HomePage />
            </Route>
            <Route path="/Produtos" exact={true}>
              <ProdutosPage />
            </Route>
            <Route path="/Fornecedores" exact={true}>
              <ForenecedorPage />
            </Route>
            <Route path="/Clientes" exact={true}>
              <CustomerPage />
            </Route>
          </Switch>
        </MenuPageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
