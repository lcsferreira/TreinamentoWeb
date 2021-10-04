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
  if (word === "") {
    alert("INSIRA UMA PALAVRA!");
    return;
  } else {
    return word;
  }
}