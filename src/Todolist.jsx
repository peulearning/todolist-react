// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import './Todolist.css';
import Icone from './assets/icon.png'

function TodoList() {
  const [lista, setLista] = useState([]);
  const [novoItem, setNovoItem] = useState("");

  function adicionarItem(form) {
    form.preventDefault();
    if (!novoItem) {
      return;
    }
    setLista([...lista, { text: novoItem, isCompleted: false }]);
    setNovoItem("");
    document.getElementById('input-entrada').focus();
  }

  function clicou(index){
    const listaAux = [...lista];
    listaAux[index].isCompleted = !listaAux[index].isCompleted;
    setLista(listaAux);
  }

  function deletarItem(index) {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  }

  function deletarTudo(){
    setLista([]);
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={adicionarItem}>
        <input id="input-entrada" type="text" value={novoItem} onChange={(e) => { setNovoItem(e.target.value) }} placeholder="Adicione uma tarefa" />
        <button className="add" type="submit">Add</button>
      </form>
      <div className="listaTarefas">
        <div className="centralizar" style={{ textAlign: 'center' }}>
          {
          lista.length === 0 ?
            <img className="icone-central" src={Icone} alt="Ícone" />
             :
            lista.map((item, index) => (
              <div
              key={index}
              className={item.isCompleted ? "item completo" : "item"}
              >
                <span onClick={()=>{clicou(index)}}>{item.text}</span>
                <button className="del" onClick={() => deletarItem(index)}>Deletar</button>
              </div>
            ))}

            {
              lista.length > 0 &&

          <button onClick={() => deletarTudo()} className="deleteAll">Deletar Todas</button>
            }
        </div>
      </div>
    </div>
  )
}

export default TodoList;
