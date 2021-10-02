export function rodadaContextBuilder(
  [
    rodada,
    setRodada
  ]) {
  return {
    rodada,
    alterarJogador: () =>
      setRodada(alterar(rodada)),
    resetaJogador: () =>
      setRodada(1)
  }
}

function alterar(rodada) {
  if (rodada === 1) {
    return 2;
  } else {
    return 1;
  }
}