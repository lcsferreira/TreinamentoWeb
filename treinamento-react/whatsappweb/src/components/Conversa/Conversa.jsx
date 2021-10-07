import React, { useState, useEffect, useRef } from "react"
import "./Conversa.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import { getMenssagemPorContatoId } from "../../services/whatsAppApiService";
import { format } from 'date-fns'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { postMenssagem } from "../../services/whatsAppApiService";

export default function Conversa(props) {
  const messageEl = useRef(null);
  const novadata = new Date();
  const [menssagens, setMenssagens] = useState([]);

  const [novaMenssagem, setNovaMenssagem] = useState({
    contatoId: props.contato.id,
    enviadoPeloContato: false,
    conteudo: "",
    datahora: novadata.toISOString(),
  })

  useEffect(() => {
    getMenssagemPorContatoId(props.contato.id).then((data) => {
      setMenssagens(data);
    })
  }, [props.contato.id]);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener('DOMNodeInserted', event => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
      });
    }
  }, [])

  function handlerSubmit(event) {
    event.preventDefault();
    postMenssagem(novaMenssagem).then((data) => {
      novaMenssagem.conteudo = "";
      setMenssagens(prevState => [...prevState, data])
    });
  }

  return (
    <div className="conversa">
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Avatar alt="Imagem Perfil" src={props.contato.imagemUrl} />
          <Typography variant="h6" color="inherit" component="div" >
            {props.contato.nome}
          </Typography>
        </Toolbar>
      </AppBar>
      <div className="chat" ref={messageEl}>
        {menssagens.map(({ id, enviadoPeloContato, conteudo, datahora }) => {
          var data = new Date(datahora);
          var dataFormatada = format(data, "dd/MM/y HH:mma");
          if (enviadoPeloContato) {
            return <div key={id} className="menssagem">
              <h3>{props.contato.nome}</h3>
              <hr />
              <p>{conteudo}<br /><span>{dataFormatada}</span></p>
            </div>
          }
          return <div key={id} className="menssagem-voce">
            <h3>Você</h3>
            <hr />
            <p>{conteudo}<br /><span>{dataFormatada}</span></p>
          </div>
        })}
      </div>
      <div className="input-bar">
        <TextField
          id="outlined-basic" label="Menssagem" variant="outlined" size="small" fullWidth value={novaMenssagem.conteudo} onChange={(event) => {
            setNovaMenssagem({ ...novaMenssagem, contatoId: props.contato.id, conteudo: event.target.value });
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              handlerSubmit(event);
            }
          }}
        />
        <Button onClick={handlerSubmit} variant="contained" color="primary" disableElevation endIcon={<SendIcon />} />
      </div>
    </div>
  );
}