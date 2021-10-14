import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./FornecedorFormCadastro.css"
import { postSupplier } from "../../service/miniShopApiSevrice"
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";

export default function FornecedorFormCadastro() {
  let history = useHistory();

  const [novoFornecedor, setNovoFornecedor] = useState({
    city: "",
    companyName: "",
    contactName: "",
    country: "",
    fax: "",
    phone: "",
  });

  function handlerSubmit(event) {
    if (event.target.checkValidity()) {
      postSupplier(novoFornecedor)
        .then((data) => {
          //delay para mudar de página
          setTimeout(() => {
            history.push("/Produtos");  //muda de página
          }, 2500);
        })
        .catch((error) => {
          alert("Error")
        });
    } else {
      alert("Preencha todos os campos!");
    }
  }

  return (
    <div className="cadastroFornecedor">
      <form className="formCadastro" noValidate onSubmit={handlerSubmit}>
        <TextField
          required
          label="Nome da Empresa"
          variant="outlined"
          value={novoFornecedor.companyName}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, companyName: event.target.value });
          }}
        />
        <TextField
          required
          label="Nome do Responsavel"
          variant="outlined"
          value={novoFornecedor.contactName}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, contactName: event.target.value });
          }}
        />
        <TextField
          required
          label="Cidade"
          variant="outlined"
          value={novoFornecedor.city}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, city: event.target.value });
          }}
        />
        <TextField
          required
          label="País"
          variant="outlined"
          value={novoFornecedor.country}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, country: event.target.value });
          }}
        />
        <TextField
          label="Fax"
          variant="outlined"
          value={novoFornecedor.fax}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, fax: event.target.value });
          }}
        />
        <TextField
          required
          label="Telefone"
          variant="outlined"
          value={novoFornecedor.phone}
          onChange={(event) => {
            setNovoFornecedor({ ...novoFornecedor, phone: event.target.value });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}