import React, { useEffect, useState } from 'react';

function Todo() {

  const [nameTodo, setNameTodo] = useState('');

  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   setTodos(todos);
  // },[todos]);

  function handlerAddTodo(e) {
    e.preventDefault();

    const todo = { key: Date.now(), name: nameTodo };

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

  return (
    <>
      <h1>To Do App</h1>

      <section>
        <p>{Date.now()}</p>
        <p>Task</p>
      </section>

      <form onSubmit={handlerAddTodo}>
        <input
          type='text'
          value={nameTodo}
          onChange={(e) => setNameTodo(e.target.value)}
          autoFocus={true}
          required
        />
        <button>Add</button>
      </form>

      <section>
          {todos.length === 0 ? (
            <strong>Nenhum to do.</strong>
          ) : (
            <ul>
              {todos.map((todo) => (
                <li key={todo.key}>
                  <input type="checkbox" className="checkbox" />

                  <strong className={todo.completed ? "complete" : "incomplete"}>{todo.name} </strong>
                  <button onClick={() => handlerRemoveTodo(todo)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </section>

    </>
  );
}

export default Todo;
