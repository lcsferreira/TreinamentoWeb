import React, { useState, useEffect } from "react";
import "./FornecedorPage.css";
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import { getAllSuppliers } from "../../service/miniShopApiSevrice";
import Pagination from "@material-ui/lab/Pagination"
import { NavLink } from "react-router-dom";
import FornecedorCardSemDetalhe from "../../components/FornecedorCardSemDetalhe/FornecedorCardSemDetalhe";
import { Button, Typography } from "@material-ui/core";



export default function ForenecedorPage() {
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [page, setPage] = useState(1);
  const limitePorPagina = 6;
  const handleChange = (event, value) => {
    setPage(value);
    getAllSuppliers().then((data) => {
      setListaFornecedores(data);
    })
  };
  const totalItens = Math.ceil(29 / limitePorPagina);//

  //passar como parametro o page e o limitePorPagina no getAll*

  useEffect(() => {
    getAllSuppliers(page - 1, limitePorPagina).then((data) => {
      setListaFornecedores(data.content);
    })
  }, [page])


  return (
    <div>
      <div className="paginacao">
        <div className="page-header-supplier">
          <LocalShippingIcon />
          <Typography variant="h6" component="h4">Lista de fornecedores</Typography>
        </div>
        <Pagination count={totalItens} page={page} onChange={handleChange} />
      </div>
      <div className="cadastro">
        <Button component={NavLink} to="/Fornecedores/cadastro" variant="contained" color="primary">Cadastrar Novo</Button>
      </div>
      <div className="listaFornecedor">
        {listaFornecedores.map((item, index) => {
          return (
            <div key={index} className="listaFornecedores__fornecedorCard">
              <FornecedorCardSemDetalhe fornecedor={item} />
            </div>
          )
        })}
      </div>
    </div>
  );
}