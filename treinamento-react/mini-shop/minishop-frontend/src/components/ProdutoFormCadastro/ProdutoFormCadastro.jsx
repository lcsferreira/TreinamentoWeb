import React, { useState, useEffect } from "react";
import "./ProdutoFormCadastro.css"
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { postProduto, getAllSuppliers } from "../../service/miniShopApiSevrice"
import { InputLabel, MenuItem, Select } from "@material-ui/core";

export default function ProdutoFormCadastro() {
  let history = useHistory();
  const [listaFornecedores, setListaFornecedores] = useState([]);
  const [detalheErro, setDetalheErro] = useState([false, false, false]);

  useEffect(() => {
    getAllSuppliers(0, 1000).then((data) => {
      setListaFornecedores(data.content);
    })
  }, [])

  const [novoProduto, setNovoProduto] = useState({
    isDiscontinued: false,
    packageName: "",
    productName: "",
    supplierId: "",
    unitPrice: "",
  })
  console.log(novoProduto);

  function handlerSubmit(event) {
    if (event.target.checkValidity()) {
      postProduto(novoProduto)
        .then((data) => {
          setTimeout(() => {
            history.push("/Produtos");
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
    <div className="cadastroProduto">
      <form className="formCadastro" noValidate onSubmit={handlerSubmit}>
        <TextField
          required
          error={detalheErro[0]}
          label="Nome do Produto"
          variant="outlined"
          value={novoProduto.productName}
          onChange={(event) => {
            if (event.target.value === "") {
              setDetalheErro([true, false, false])
            } else {
              setDetalheErro([false, false, false])
            }
            setNovoProduto({ ...novoProduto, productName: event.target.value });
          }}
        />
        <TextField
          required
          error={detalheErro[1]}
          label="Tipo de Pacote"
          variant="outlined"
          value={novoProduto.packageName}
          onChange={(event) => {
            if (event.target.value === "") {
              setDetalheErro([false, true, false])
            } else {
              setDetalheErro([false, false, false])
            }
            setNovoProduto({ ...novoProduto, packageName: event.target.value });
          }}
        />
        <InputLabel id="supplier">Fornecedor</InputLabel>
        <Select
          labelId="supplier"
          value={novoProduto.supplierId}
          onChange={(event) => {
            setNovoProduto({ ...novoProduto, supplierId: event.target.value });
          }}>
          {listaFornecedores.map((fornecedor) => {
            return (
              <MenuItem
                key={fornecedor.id}
                value={fornecedor.id}
              >
                {fornecedor.companyName}
              </MenuItem>
            )
          })}
        </Select>
        <TextField
          required
          error={detalheErro[2]}
          label="Valor da Unidade"
          type="number"
          variant="outlined"
          value={novoProduto.unitPrice}
          onChange={(event) => {
            if (event.target.value === "") {
              setDetalheErro([false, false, true])
            } else {
              setDetalheErro([false, false, false])
            }
            setNovoProduto({ ...novoProduto, unitPrice: event.target.valueAsNumber });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );

}