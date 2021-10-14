import { BrowserRouter, Switch, Route } from "react-router-dom";
import ForenecedorPage from "./pages/FornecedorPage";
import CustomerPage from "./pages/CustomerPage/CustomerPage";
import CustomerCadastroPage from "./pages/CustomerCadastroPage/CustomerCadastroPage";
import HomePage from "./pages/HomePage/HomePage";
import ProdutosPage from "./pages/ProdutosPage";
import MenuPageTemplate from "./pageTemplates/MenuPageTemplate";
import ProdutoCadastroPage from "./pages/ProdutoCadastroPage/ProdutoCadastroPage";
import ProdutoDetalhePage from "./pages/ProdutoDetalhePage";
import FornecedorDetalhePage from "./pages/FornecedorDetalhePage/FornecedorDetalhePage";
import FornecedorCadastroPage from "./pages/FornecedorCadastroPage/FornecedorCadastroPage";

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
            <Route path="/Produtos/cadastro" exact={true}>
              <ProdutoCadastroPage />
            </Route>
            <Route path="/Produto/:id" exact={true}>
              <ProdutoDetalhePage />
            </Route>
            <Route path="/Fornecedores" exact={true}>
              <ForenecedorPage />
            </Route>
            <Route path="/Fornecedores/cadastro" exact={true}>
              <FornecedorCadastroPage />
            </Route>
            <Route path="/Fornecedor/:id" exact={true}>
              <FornecedorDetalhePage />
            </Route>
            <Route path="/Clientes" exact={true}>
              <CustomerPage />
            </Route>
            <Route path="/Clientes/cadastro" exact={true}>
              <CustomerCadastroPage />
            </Route>
          </Switch>
        </MenuPageTemplate>
      </BrowserRouter>
    </div>
  );
}

export default App;
