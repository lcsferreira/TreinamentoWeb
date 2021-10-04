
export function palavraSecretaContextBuilder([
  palavra, setPalavra
]) {
  return {
    palavra,
    inserirPalavra: (word) =>
      setPalavra(inserir(word)),
  };
}

function inserir(word) {
  return word;
}