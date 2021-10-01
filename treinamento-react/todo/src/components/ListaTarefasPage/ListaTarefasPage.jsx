import React, { useState } from "react";
import useListaTarefas from "../../services/ListaTarefas/useListaTarefas";
import Tarefa from "../Tarefa";
import "./ListaTarefasPage.css";

function ListaTarefasPage() {
  const { listaDeTarefas, adicionarTarefa, excluirTarefas } = useListaTarefas();

  const [novaTarefa, setNovaTarefa] = useState("");

  function inputChangeCallBack(event) {
    setNovaTarefa(event.target.value);
  }

  function btnNovaTarefaCallBack() {
    if (novaTarefa === "") {
      return;
    }
    adicionarTarefa(novaTarefa); // cria a nova tarefa;
    setNovaTarefa(""); //limpa o valor da tela
  }

  const tarefasPendentes = listaDeTarefas.filter((tarefa) => !tarefa.concluida).length;

  return (
    <div className="ListaTarefasPage">
      <h1>Lista de Atividades!</h1>
      <div className="action-box">
        <input
          type="text"
          placeholder="Adicionar nova tarefa"
          value={novaTarefa}
          onChange={inputChangeCallBack}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              btnNovaTarefaCallBack()
            }
          }}
        />
        <button
          type="button"
          className="button big"
          onClick={btnNovaTarefaCallBack}
        >
          +
        </button>
        <button
          type="button"
          className="button-delete"
          onClick={excluirTarefas}>
          X
        </button>
      </div>
      <div className="tarefas-pendentes">
        Pendências: {tarefasPendentes}
      </div>
      <div className="list">
        {listaDeTarefas.map((item, i) => {
          return <Tarefa key={i} tarefa={item}></Tarefa>;
        })}
      </div>
    </div>
  );
}
export default ListaTarefasPage;
