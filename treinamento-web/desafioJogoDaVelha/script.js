var vez = 1;
var tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var preenchido = 0;
var jogando = false;
const rodada = document.querySelector('p span')
rodada.innerHTML = "Jogador " + vez;

function verificafimDeJogo() {
  //----------------vence jogador 1 ------------------
  //vence linha 1
  if (tabuleiro[0] == 1 && tabuleiro[1] == 1 && tabuleiro[2] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence linha 2
  if (tabuleiro[3] == 1 && tabuleiro[4] == 1 && tabuleiro[5] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence linha 3
  if (tabuleiro[6] == 1 && tabuleiro[7] == 1 && tabuleiro[8] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence coluna 1
  if (tabuleiro[0] == 1 && tabuleiro[3] == 1 && tabuleiro[6] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence coluna 2
  if (tabuleiro[1] == 1 && tabuleiro[4] == 1 && tabuleiro[7] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence coluna 3
  if (tabuleiro[2] == 1 && tabuleiro[5] == 1 && tabuleiro[8] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence diagonal 1
  if (tabuleiro[0] == 1 && tabuleiro[4] == 1 && tabuleiro[8] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //vence diagonal 2
  if (tabuleiro[6] == 1 && tabuleiro[4] == 1 && tabuleiro[2] == 1) {
    alert("Vencedor: Jogador 1!!");
    limpar();
    return;
  }
  //----------vence jogador 2 ----------------
  //vence linha 1
  if (tabuleiro[0] == 2 && tabuleiro[1] == 2 && tabuleiro[2] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence linha 2
  if (tabuleiro[3] == 2 && tabuleiro[4] == 2 && tabuleiro[5] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence linha 3
  if (tabuleiro[6] == 2 && tabuleiro[7] == 2 && tabuleiro[8] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence coluna 1
  if (tabuleiro[0] == 2 && tabuleiro[3] == 2 && tabuleiro[6] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence coluna 2
  if (tabuleiro[1] == 2 && tabuleiro[4] == 2 && tabuleiro[7] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence coluna 3
  if (tabuleiro[2] == 2 && tabuleiro[5] == 2 && tabuleiro[8] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence diagonal 1
  if (tabuleiro[0] == 2 && tabuleiro[4] == 2 && tabuleiro[8] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  //vence diagonal 2
  if (tabuleiro[6] == 2 && tabuleiro[4] == 2 && tabuleiro[2] == 2) {
    alert("Vencedor: Jogador 2!!");
    limpar();
    return;
  }
  if (preenchido === tabuleiro.length) {
    alert("EMPATE!!");
    limpar();
    return;
  }
}

function jogada(posicao) {
  if (!jogando) {
    return;
  }
  const altera = document.getElementById(posicao);
  if (tabuleiro[posicao] !== 0) {
    return;
  }
  if (vez === 1) {
    tabuleiro[posicao] = 1;
    altera.innerHTML = "X";
  }
  if (vez === 2) {
    tabuleiro[posicao] = 2;
    altera.innerHTML = "O";
  }
  preenchido++;
  vez = vez == 1 ? 2 : 1;
  setTimeout(() => {
    verificafimDeJogo();
  }, 100)
  rodada.innerHTML = "Jogador " + vez
}

function iniciar() {
  jogando = true;
  const mostrarStatus = document.getElementById("status");
  const botaoIniciar = document.querySelector('[value="INICIAR"]');
  const botaoLimpar = document.querySelector('[value="LIMPAR"]');
  const mostrarJogo = document.getElementById("jogo");
  mostrarJogo.style.display = "grid";
  mostrarStatus.style.display = "block";
  rodada.innerHTML = "Jogador " + vez;
  botaoIniciar.setAttribute('disabled', true)
  botaoLimpar.removeAttribute('disabled')
}

function limpar() {
  tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  preenchido = 0;
  const Grid = document.querySelectorAll('.posicao');
  const botaoIniciar = document.querySelector('[value="INICIAR"]');
  const botaoLimpar = document.querySelector('[value="LIMPAR"]');
  Grid.forEach(item => { item.innerHTML = "" })
  botaoLimpar.setAttribute('disabled', true)
  botaoIniciar.removeAttribute('disabled')
  vez = 1;
  rodada.innerHTML = ""
  jogando = false;
}
