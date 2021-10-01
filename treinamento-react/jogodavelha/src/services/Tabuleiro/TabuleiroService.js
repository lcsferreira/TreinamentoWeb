import JogadaModel from "../../models/JogadaModel"

export function tabuleiroContextBuilder([
  tabuleiro,
  setTabuleiro
]) {
  return {
    tabuleiro,
    tabuleiroJogada: (posicao, rodada) =>
      setTabuleiro(jogar(tabuleiro, posicao, rodada)),
    limpaTabuleiro: () =>
      setTabuleiro([0, 0, 0, 0, 0, 0, 0, 0, 0])
  };
}

function jogar(tabuleiro, posicao, rodada) {
  const novaJogada = new JogadaModel(
    posicao, rodada
  )
  tabuleiro.splice(novaJogada.posicao, 1, novaJogada.rodada);
  console.log(tabuleiro);
  return tabuleiro;
}