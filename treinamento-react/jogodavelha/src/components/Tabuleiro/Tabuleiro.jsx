import React, { useState } from 'react';
import "./Tabuleiro.css";
import useTabuleiro from "../../services/Tabuleiro/useTabuleiro";
import useRodada from "../../services/Rodada/useRodada";


function Tabuleiro() {
  const { tabuleiro, tabuleiroJogada, limpaTabuleiro } = useTabuleiro();
  const { rodada, alterarJogador, resetaJogador } = useRodada();
  const [ganhador, setGanhador] = useState('');

  function divOnClick(event) {
    tabuleiroJogada(event.target.id, event.target.value);
    setTimeout(() => {
      verifyEndGame();
    }, 100)
    alterarJogador();
  }

  function verifyEndGame() {
    if (tabuleiro[0] === '1' && tabuleiro[1] === '1' && tabuleiro[2] === '1') {
      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence linha 2
    if (tabuleiro[3] === '1' && tabuleiro[4] === '1' && tabuleiro[5] === '1') {
      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence linha 3
    if (tabuleiro[6] === '1' && tabuleiro[7] === '1' && tabuleiro[8] === '1') {
      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 1
    if (tabuleiro[0] === '1' && tabuleiro[3] === '1' && tabuleiro[6] === '1') {

      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 2
    if (tabuleiro[1] === '1' && tabuleiro[4] === '1' && tabuleiro[7] === '1') {

      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 3
    if (tabuleiro[2] === '1' && tabuleiro[5] === '1' && tabuleiro[8] === '1') {

      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence diagonal 1
    if (tabuleiro[0] === '1' && tabuleiro[4] === '1' && tabuleiro[8] === '1') {

      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence diagonal 2
    if (tabuleiro[6] === '1' && tabuleiro[4] === '1' && tabuleiro[2] === '1') {

      setGanhador('xisGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 1!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //----------vence jogador 2 ----------------
    //vence linha 1
    if (tabuleiro[0] === '2' && tabuleiro[1] === '2' && tabuleiro[2] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence linha 2
    if (tabuleiro[3] === '2' && tabuleiro[4] === '2' && tabuleiro[5] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence linha 3
    if (tabuleiro[6] === '2' && tabuleiro[7] === '2' && tabuleiro[8] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 1
    if (tabuleiro[0] === '2' && tabuleiro[3] === '2' && tabuleiro[6] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 2
    if (tabuleiro[1] === '2' && tabuleiro[4] === '2' && tabuleiro[7] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence coluna 3
    if (tabuleiro[2] === '2' && tabuleiro[5] === '2' && tabuleiro[8] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence diagonal 1
    if (tabuleiro[0] === '2' && tabuleiro[4] === '2' && tabuleiro[8] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    //vence diagonal 2
    if (tabuleiro[6] === '2' && tabuleiro[4] === '2' && tabuleiro[2] === '2') {

      setGanhador('bolinhaGanhou')
      setTimeout(() => {
        alert("Vencedor: Jogador 2!!");
        limpaTabuleiro();
        resetaJogador();
        setGanhador('')
      }, 200)
      return;
    }
    let preenchido = 0;
    tabuleiro.forEach(cell => { if (cell !== 0) { preenchido++ } })
    if (preenchido === tabuleiro.length) {
      alert("EMPATE");
      limpaTabuleiro();
      resetaJogador();
      return;
    }
  }

  return (
    <div>
      <div className="board">
        {tabuleiro.map((cell, index) => {
          if (cell === '1') {
            return <button key={index} className={ganhador === 'xisGanhou' ? "cell-winner" : "cell"} id={index}>X</button>
          } else if (cell === '2') {
            return <button key={index} className={ganhador === 'bolinhaGanhou' ? "cell-winner" : "cell"} id={index}>O</button>
          } else if (cell === 0) {
            return <button className="cell" key={index} id={index} value={rodada} onClick={divOnClick}></button>
          } else {
            return <div></div>
          }
        })}
      </div>
      <h2>Rodada: Jogador {rodada}</h2>
    </div >
  );
}

export default Tabuleiro;