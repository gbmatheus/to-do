import React, { useState } from 'react';

import './styles.css';

function Todo() {

  const [nameTodo, setNameTodo] = useState('');

  const [todos, setTodos] = useState([]);


  function handlerAddTodo(e) {
    e.preventDefault();

    const todo = { key: Date.now(), name: nameTodo, done: false };

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

    todos[todoIndex].done = checked;

    setTodos([...todos]);
  }

  return (
    <>
      <main className="todo-main">

        <section className="todo-info">
          <p>{Date.now()} </p><span>Task</span>
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
          <button>+</button>
        </form>

        <section className="todo-list">
            {todos.length === 0 ? (
              <strong>Nenhum to do.</strong>
            ) : (
              <ul>
                {todos.map((todo) => (
                  <li key={todo.key} className="todo-item">
                    <input type="checkbox" checked={todo.done} onChange={e => handlerDoneTodo(todo, e.target.checked)} />

                    <strong className={todo.done ? "checked" : ""}>{todo.name} </strong>
                    <button onClick={() => handlerRemoveTodo(todo)}>Remove</button>
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
