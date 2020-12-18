import React, { useEffect, useState } from 'react';
import {FiPlus, FiTrash2} from 'react-icons/fi';

import formatDate from '../../utils/formatDate';

import './styles.css';

function Todo() {

  const [nameTodo, setNameTodo] = useState('');
  const [todosIncompleted, setTodosIncompleted] = useState(0);
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(() => {
    const todosStorage = localStorage.getItem('@Todos:list');

    if(!todosStorage) {
      return [];
    }

    return JSON.parse(todosStorage);

  });

  useEffect(() => {

    const incompleted = todos.filter(todo => todo.completed === false);
    console.log(incompleted.length);

    setTodosIncompleted(incompleted.length);

    localStorage.setItem('@Todos:list', JSON.stringify(todos));

  },[todos])

  function handlerAddTodo(e) {
    e.preventDefault();

    const todo = { key: Date.now(), name: nameTodo, completed: false };

    setNameTodo('');
    setTodos([...todos, todo]);
  }

  function handlerRemoveTodo({key}) {

    const todoIndex = todos.findIndex((todo) => todo.key === key);

    todos.splice(todoIndex, 1);

    // Outra forma de remover
    // const newTodos = todos.filter(todo => todo.key !== key);

    setTodos([...todos]);
  }

  function handlerDoneTodo({key}, checked) {
    const todoIndex = todos.findIndex((todo) => todo.key === key);

    todos[todoIndex].completed = checked;

    setTodos([...todos]);
  }

  return (
    <>
      <header className="todo-header"/>

      <main className="todo-main">

        <section className="todo-info">
          <p>{formatDate()} </p><span>{todosIncompleted} Tarefas</span>
        </section>

        <form className="form-new-task" onSubmit={handlerAddTodo}>
          <input
            type='text'
            value={nameTodo}
            onChange={(e) => setNameTodo(e.target.value)}
            autoFocus={true}
            placeholder="Nova tarefa"
            required
          />
          <button>
            <FiPlus size={26}  />
            {/* <FiPlusSquare /> */}
          </button>
        </form>

        <section className="todo-list">
            {todos.length === 0 ? (
              <strong>Nenhum to do.</strong>
            ) : (
              <ul>
                {todos.map((todo) => (
                  <li key={todo.key} className="todo-item">
                    <input type="checkbox" checked={todo.completed} onChange={e => handlerDoneTodo(todo, e.target.checked)} />

                    <strong className={todo.completed ? "checked" : ""}>{todo.name} </strong>
                    <button onClick={() => handlerRemoveTodo(todo)}>
                      <FiTrash2 size={26} color={"#fff"} />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>
      </main>
    </>
  );
}

export default Todo;
