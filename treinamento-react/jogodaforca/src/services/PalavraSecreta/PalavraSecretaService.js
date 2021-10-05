
export function palavraSecretaContextBuilder([
  palavra, setPalavra
]) {
  return {
    palavra,
    addPalavra: (word) =>
      setPalavra(inserir(word)),
  };
}

function inserir(word) {
  return word;
}


