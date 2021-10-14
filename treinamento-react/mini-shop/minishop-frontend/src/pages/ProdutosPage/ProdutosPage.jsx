import React, { useState, useEffect } from "react";
import "./ProdutosPage.css"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import axios from "axios";
import { getAllProducts } from "../../service/miniShopApiSevrice";
import "./ProdutosPage.css";
import FormControl from "@material-ui/core/FormControl"
import Pagination from "@material-ui/lab/Pagination"
import AddIcon from "@material-ui/icons/AddAPhoto"
import { Button, Fab, Input, InputLabel, MenuItem, Select, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import ProdutoCardSemDetalhe from "../../components/ProdutoCardSemDetalhe";

export default function ProdutosPage() {
  const [listaProdutos, setListaProdutos] = useState([]);
  const [todosProdutos, setTodosProdutos] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [allowButton, setAllowButton] = useState(true);
  const [novaImagemProduto, setNovaImagemProduto] = useState({
    path: "",
    productId: ""
  });

  const [page, setPage] = useState(1);
  const limitePorPagina = 8;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const totalItens = Math.ceil(78 / limitePorPagina);//deixar o tamanho automático(fazer)

  useEffect(() => {
    getAllProducts(0, 1000).then((data) => {
      setTodosProdutos(data.content);
    });
  }, []);

  useEffect(() => {
    getAllProducts(page - 1, limitePorPagina).then((data) => {
      setListaProdutos(data.content);
    });
  }, [page])

  const fileSelectedHandler = event => {
    setAllowButton(false);
    setSelectedFile(event.target.files[0]);
  }

  const fileUploadHandler = () => {
    let fd = new FormData();
    let config = {
      'Accept': '*/*',
      'Content-Type': 'multipart/form-data'
    }
    console.log(selectedFile.name)
    fd.append('file', selectedFile, selectedFile.name);
    console.log(fd.get("path"));
    axios.post("http://localhost:8080/api/v1/upload-image", fd, config)
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div>
      <div className="paginacao">
        <div className="page-header">
          <ShoppingCartIcon />
          <Typography variant="h6" component="h4">Lista de produtos</Typography>
        </div>
        <Pagination count={totalItens} page={page} onChange={handleChange} />
      </div>
      <div className="cadastro">
        <Button component={NavLink} to="/Produtos/cadastro" variant="contained" color="primary">Cadastrar Novo</Button>
      </div>
      <div className="uploadImagem">
        <label htmlFor="upload-image">
          <Input style={{ display: 'none' }} id="upload-image" type="file" onChange={fileSelectedHandler} />
          <Fab
            color="primary"
            size="small"
            component="span"
            aria-label="add"
            variant="extended"
            title="Selecionar imagem"
          >
            <AddIcon /> Imagem
          </Fab>
        </label>
        <FormControl disabled={allowButton} variant="filled" style={{ width: "160px", marginLeft: "15px" }}>
          <InputLabel id="Produto">Produto</InputLabel>
          <Select
            labelId="Produto"
            value={novaImagemProduto.productId}
            onChange={(event) => {
              setNovaImagemProduto({ ...novaImagemProduto, productId: event.target.value });
            }}>
            {todosProdutos.map((produto) => {
              return (
                <MenuItem
                  key={produto.id}
                  value={produto.id}
                >
                  {produto.productName}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <Button disabled={allowButton} color="primary" title="Salvar imagem" variant="contained" onClick={fileUploadHandler}>Upload</Button>
      </div>
      <div className="listaProdutos">
        {listaProdutos.map((item, index) => {
          return (
            <div key={index} className="listaProdutos__produtoCard">
              <ProdutoCardSemDetalhe produto={item} />
            </div>
          );
        })}
      </div>
    </div >
  );
}