import React, { useEffect, useState } from "react";
import CustomerCard from "../../components/CustomerCard/CustomerCard";
import { getAllCustomers } from "../../service/miniShopApiSevrice";
import Pagination from "@material-ui/lab/Pagination"
import { Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";

export default function CustomerPage() {
  const [listaCustomers, setListaCustomers] = useState([]);
  const [page, setPage] = useState(1);
  const limitePorPagina = 8;
  const handleChange = (event, value) => {
    setPage(value);
  };
  const totalItens = Math.ceil(91 / limitePorPagina);//deixar o tamanho automático(fazer)

  //passar como parametro o page e o limitePorPagina no getAll*
  //pegar o data.content
  useEffect(() => {
    getAllCustomers(page - 1, limitePorPagina).then((data) => {
      // console.log(data);
      setListaCustomers(data.content);
    });
  }, [page])
  return (
    <div>
      <div className="paginacao">
        <Pagination count={totalItens} page={page} onChange={handleChange} />
      </div>
      <div className="cadastro">
        <Button component={NavLink} to="/Clientes/cadastro" variant="contained">Cadastrar Novo Cliente</Button>
      </div>
      <h2>Lista de Clientes:</h2>
      <div className="lista-customers">
        {listaCustomers.map((item, index) => {
          return (
            <div key={index} className="listaCustomers__customerCard">
              <CustomerCard customer={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

