import React, { useEffect, useState } from 'react';
import { getContatos } from "../../services/whatsAppApiService";
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { NavLink } from "react-router-dom"

export default function ListaContatos() {
  const [listaDeContatos, setListaDeContatos] = useState([]);

  useEffect(() => {
    getContatos().then((data) => {
      setListaDeContatos(data);
    })
  }, [])

  return (
    <List sx={{ mb: 2 }}>
      {listaDeContatos.map(({ id, imagemUrl, nome }) => (
        <React.Fragment key={id}>
          <ListItem component={NavLink} to={"/conversa/" + id}>
            <ListItemAvatar>
              <Avatar alt="Imagem Perfil" src={imagemUrl} />
            </ListItemAvatar>
            <ListItemText primary={nome} secondary="ultima mensagem" />
          </ListItem>
        </React.Fragment>
      ))}
    </List>
  )
}