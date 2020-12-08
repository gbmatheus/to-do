import React, { useState } from "react";

function Todo() {
  const [nameTodo, setNameTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handlerAddTodo(e) {
    e.preventDefault();

    const todo = { name: nameTodo, key: Date.now(), completed: false };

    setTodos([...todos, todo]);
    setNameTodo('');

  }

  return (
    <>
      <h1>To Do App</h1>

      <form onSubmit={handlerAddTodo}>
        <input
          type="text"
          value={nameTodo}
          onChange={(e) => setNameTodo(e.target.value)}
        />
        <button>Add</button>
      </form>

      <div>
        <h3>To Do List</h3>
        <div>
          {todos.length === 0 ? (
            <strong>Nenhum to do.</strong>
          ) : (
            <ul>
              {todos.map((todo) => (
                <li key={todo.key}>
                  <strong>{todo.name} </strong>
                  <small>{ !todo.completed ? ' In progress ': ' Done '}</small>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}

export default Todo;
