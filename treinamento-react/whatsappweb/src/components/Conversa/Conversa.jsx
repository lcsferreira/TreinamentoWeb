import React, { useState, useEffect, useRef } from "react"
import "./Conversa.css";
import { AppBar, Toolbar, Typography } from "@material-ui/core"
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
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

  const listaMensagensReposta = ["Certo!", "Ok", "Tudo bem e você?", "claro!", "hahahah", "Não não", "concordo hahaha", "Terminou o projeto?", "tu é bom ein"];

  const [novaMenssagem, setNovaMenssagem] = useState({
    contatoId: props.contato.id,
    enviadoPeloContato: false,
    conteudo: "",
    datahora: novadata.toISOString(),
  })

  const [mensagemResposta, setMensagemResposta] = useState({
    contatoId: props.contato.id,
    enviadoPeloContato: true,
    conteudo: listaMensagensReposta[Math.floor(Math.random() * listaMensagensReposta.length)],
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

  function resposta() {
    do {
      var conteudoAleatorio = listaMensagensReposta[Math.floor(Math.random() * listaMensagensReposta.length)];
    } while (conteudoAleatorio === "");

    setMensagemResposta({
      ...mensagemResposta,
      conteudo: conteudoAleatorio,
    });
  }

  function handlerSubmit(event) {
    event.preventDefault();
    if (novaMenssagem.conteudo === "") {
      return;
    }
    postMenssagem(novaMenssagem).then((data) => {
      novaMenssagem.conteudo = "";
      setMenssagens(prevState => [...prevState, data]);
      setTimeout(() => {
        resposta();
      }, 3000);
      setTimeout(() => {
        postMenssagem(mensagemResposta).then((data) => {
          setMenssagens(prevState => [...prevState, data]);
        })
      }, 3000);
      // console.log(menssagens)
    });
  }

  return (
    <div className="conversa">
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Box sx={{ flexGrow: 1 }}>
            <Avatar alt="Imagem Perfil" src={props.contato.imagemUrl} />
          </Box>
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
          id="outlined-basic" autoComplete='off' label="Menssagem" variant="outlined" size="small" fullWidth value={novaMenssagem.conteudo} onChange={(event) => {
            setMensagemResposta({
              ...mensagemResposta,
              contatoId: props.contato.id,
            });
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