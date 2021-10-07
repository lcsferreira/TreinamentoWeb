import React from 'react';
import "./ContatosPage.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import ListaContatos from '../../components/ListaContatos';


export default function ContatosPage() {
  return (
    <div className="contatos">
      <AppBar position="static">
        <Toolbar variant="dense" >
          <Typography variant="h6" color="inherit" component="div">
            Contatos
          </Typography>
        </Toolbar>
      </AppBar>
      <ListaContatos></ListaContatos>
    </div>
  );
}