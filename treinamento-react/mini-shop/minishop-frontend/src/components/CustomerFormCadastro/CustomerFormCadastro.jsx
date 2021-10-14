import React, { useState, useEffect } from "react";
import "./CustomerFormCadastro.css"
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { postCustomer, getAllCustomers } from "../../service/miniShopApiSevrice";

export default function CustomerFormCadastro() {
  let history = useHistory();
  const [setListaCustomers] = useState([]);

  useEffect(() => {
    getAllCustomers().then((data) => {
      setListaCustomers(data);
    })
  }, [])

  const [novoCustomer, setNovoCustomer] = useState({
    customerFirstName: "",
    customerLastName: "",
    customerPhone: "",
    customerCity: "",
    customerCountry: "",
  })

  const alertConfig = {
    error: {
      color: "#f44336",
      mensagem: "Hum... parece que algo deu errado. Verifique a conexão com a API.",
    },
    warning: {
      color: "#ff9800",
      mensagem: "Por favor, prencha todos os campos!",
    },
    success: {
      color: "#4caf50",
      mensagem: "Oba! Cadastro realizado com sucesso!",
    },
  };

  const [alert, setAlert] = useState(alertConfig.success);
  const [openAlert, setOpenAlert] = useState(false);

  const handleAlertClose = () => {
    setOpenAlert(false);
  };

  function handlerSubmit(event) {
    if (event.target.checkValidity()) {
      postCustomer(novoCustomer)
        .then((data) => {
          setAlert(alertConfig.success);
          setOpenAlert(true);
          //delay para mudar de página
          setTimeout(() => {
            history.push("/Clientes");  //muda de página
          }, 1500);
        })
        .catch((error) => {
          setAlert(alertConfig.error);
          setOpenAlert(true);
        });
    } else {
      setAlert(alertConfig.warning);
      setOpenAlert(true);
    }
  }

  return (
    <div>
      <form className="formCadastro" noValidate onSubmit={handlerSubmit}>
      <h2>Preencha os campos abaixo para cadastrar um novo cliente:</h2>
        <TextField
          required
          label="Nome do Cliente"
          type="text"
          variant="outlined"
          value={novoCustomer.customerFirstName}
          onChange={(event) => {
            setNovoCustomer({ ...novoCustomer, customerFirstName: event.target.value });
          }}
        />
        <TextField
          required
          label="Sobrenome do Cliente"
          type="text"
          variant="outlined"
          value={novoCustomer.customerLastName}
          onChange={(event) => {
            setNovoCustomer({ ...novoCustomer, customerLastName: event.target.value });
          }}
        />
        <TextField
          required
          label="Telefone do Cliente"
          type="text"
          variant="outlined"
          value={novoCustomer.customerPhone}
          onChange={(event) => {
            setNovoCustomer({ ...novoCustomer, customerPhone: event.target.value });
          }}
        />
        <TextField
          required
          label="Cidade do Cliente"
          type="text"
          variant="outlined"
          value={novoCustomer.customerCity}
          onChange={(event) => {
            setNovoCustomer({ ...novoCustomer, customerCity: event.target.value });
          }}
        />
        <TextField
          required
          label="País do Cliente"
          type="text"
          variant="outlined"
          value={novoCustomer.customerCountry}
          onChange={(event) => {
            setNovoCustomer({ ...novoCustomer, customerCountry: event.target.value });
          }}
        />
        <Button type="submit" variant="contained" color="primary">
          Cadastrar novo cliente!
        </Button>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openAlert}
        autoHideDuration={2000}
        onClose={handleAlertClose}
      >
        <SnackbarContent
          style={{
            backgroundColor: alert.color,
            fontWeight: 500,
          }}
          message={alert.mensagem}
          // teste commit
        />
      </Snackbar>
    </div>
  );

}