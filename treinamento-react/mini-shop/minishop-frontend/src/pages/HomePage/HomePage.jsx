import { Button } from '@material-ui/core';
import React from 'react';
import { NavLink } from "react-router-dom";

const HomePage = () => {
    return (
        <div className="container" style={{ width: "650px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div>
                <h2>Bem vindo ao minishop!</h2>
                <h3>O que você deseja fazer agora?!</h3>
                <p>Utilize as opções abaixo para acessar rapidamente as guias de gerenciamento, ou navegue pelo menu lateral.</p>
                <div className="container-buttons" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Button component={NavLink} to="/Produtos" variant="contained" color="primary">
                        VERIFICAR PRODUTOS
                    </Button >
                    <Button component={NavLink} to="/Clientes" variant="contained" color="primary">
                        VERIFICAR CLIENTES
                    </Button>
                    <Button component={NavLink} to="/Fornecedores" variant="contained" color="primary">
                        VERIFICAR FORNECEDORES
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;