export function isPlayingContextBuilder([
  jogando, setJogando
]) {
  return {
    jogando,
    iniciarJogo: (pagina) =>
      setJogando(alteraPagina(pagina)),
  }
}

function alteraPagina(pagina) {
  return pagina;
}