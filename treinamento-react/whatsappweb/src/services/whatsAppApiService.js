import axios from "axios";

const urlApi = "http://localhost:3000/contato";
const urlApiMenssagem = "http://localhost:3000/mensagem";

export function getMenssagemPorContatoId(id) {
  const urlApiMenssagemComId = urlApiMenssagem + "?contatoId=" + id;
  return axios.get(urlApiMenssagemComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

export function getContatos() {
  return axios.get(urlApi).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

export function getContatoPorId(id) {
  const urlComId = urlApi + "/" + id;
  return axios.get(urlComId).then((AxiosResponse) => {
    return AxiosResponse.data;
  })
}

export function postMenssagem(novaMenssagem) {
  const menssagem = {
    contatoId: novaMenssagem.contatoId,
    enviadoPeloContato: novaMenssagem.enviadoPeloContato,
    conteudo: novaMenssagem.conteudo,
    datahora: novaMenssagem.datahora,
  };
  return axios.post(urlApiMenssagem, menssagem).then((AxiosResponse) => {
    return AxiosResponse.data;
  });
}