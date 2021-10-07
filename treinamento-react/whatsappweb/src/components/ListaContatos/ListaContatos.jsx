import React, { useEffect, useState } from 'react';
import "./ListaContatos.css"
import { getContatos, getMensagens } from "../../services/whatsAppApiService";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom"

export default function ListaContatos() {
  const [listaDeContatos, setListaDeContatos] = useState([]);
  const [listaMsg, setListaMsg] = useState([]);

  useEffect(() => {
    getContatos().then((data) => {
      setListaDeContatos(data);
    })
  }, [])

  useEffect(() => {
    getMensagens().then((data) => {
      setListaMsg(data);
    })
  });

  function ultimaMensagem(id) {
    var string = "";
    for (let i = 0; i < listaMsg.length; i++) {
      if (listaMsg[i].contatoId === id) {
        string = listaMsg[i].conteudo;
      }
    }
    return string;
  }

  return (
    <List sx={{ mb: 2 }}>
      {listaDeContatos.map(({ id, imagemUrl, nome }) => (
        <ListItem key={id} component={NavLink} to={"/conversa/" + id}>
          <ListItemAvatar>
            <Avatar alt="Imagem Perfil" src={imagemUrl} />
          </ListItemAvatar>
          <ListItemText primary={nome} secondary={ultimaMensagem(id)} />
        </ListItem>
      ))}
    </List>
  )
}