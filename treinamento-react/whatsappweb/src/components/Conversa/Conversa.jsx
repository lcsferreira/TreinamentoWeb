import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import "./Conversa.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import { getMenssagemPorContatoId } from "../../services/whatsAppApiService";

export default function Conversa(props) {
  const { id } = useParams();
  const [menssagens, setMenssagens] = useState([]);

  useEffect(() => {
    getMenssagemPorContatoId(id).then((data) => {
      setMenssagens(data);
    })
  }, [id]);


  return (
    <div>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Avatar alt="Imagem Perfil" src={props.contato.imagemUrl} />
          <Typography variant="h6" color="inherit" component="div" >
            {props.contato.nome}
          </Typography>
        </Toolbar>
      </AppBar>
      {menssagens.map(({ id, enviadoPeloContato, conteudo, datahora }) => {
        if (enviadoPeloContato) {
          return <div key={id} className="menssagem">
            <h3>{props.contato.nome}</h3>
            <p>{conteudo}<span>{datahora}</span></p>
          </div>
        }
        return <div key={id} className="menssagem-voce">
          <h3>Você</h3>
          <p>{conteudo}<span>{datahora}</span></p>
        </div>
      })}
    </div>
  );
}