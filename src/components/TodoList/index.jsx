import React from 'react';

function TodoList (props) {

  const todos = props.todos;

  function handlerRemoveTodo({key}) {

    // console.log('Remover todo ', key);
    console.log(todos)

    // const todoIndex = todos.findIndex((todo) => todo.key === key);

    // todos.splice(todoIndex, 1);

    // setTodos(todos);

  }

  return (
    <>
      <div>
        <h3>To Do List</h3>

        <section>
          {todos.length === 0 ? (
            <strong>Nenhum to do.</strong>
          ) : (
            <ul>
              {todos.map((todo, index) => (
                <li key={todo.key}>
                  <input type="checkbox" className="checkbox" />

                  <strong className={todo.completed ? "complete" : "incomplete"}>{todo.name} </strong>
                  <button onClick={() => handlerRemoveTodo(todo)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </>
  )
}

export default TodoList;
