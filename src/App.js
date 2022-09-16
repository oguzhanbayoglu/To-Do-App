import React, { useState } from "react";
import "./styles.css";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { nanoid } from "nanoid";
import Timer from "./Timer";

function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [shown, setShown] = useState(false);
  const [anima1] = useAutoAnimate();
  const [anima2] = useAutoAnimate();

  function addTodo(e) {
    e.preventDefault();
    setTodos(() => [
      {
        id: nanoid(),
        title: todo,
        isEdit: false,
      },
      ...todos,
    ]);
    setTodo("");
  }

  function deleteTodo(i) {
    setTodos((todos) => todos.filter((todo) => todo.id !== i));
  }

  function deleteAll(e) {
    e.preventDefault();
    if (todos.length > 0 && window.confirm("Are you sure?")) {
      setTodos([]);
      setTodo("");
    } else {
    }
  }

  function handleEdit() {
    setTodos((todos) => [!todos.isEdit]);
  }

  return (
    <>
      <div className="container" ref={anima2}>
        <h1>To-Do</h1>
        {shown && <h2>{todos.length}</h2>}
        <button className="shown" onClick={() => setShown(() => !shown)}>
          {shown ? "Hide lenght" : "Show lenght"}
        </button>
        <form onSubmit={addTodo}>
          <label>
            <input
              type="text"
              value={todo}
              placeholder="todo"
              onChange={(e) => setTodo(e.currentTarget.value)}
            />
            <button className="add" disabled={!todo} type="submit">
              Add
            </button>
            <button className="deleteAll" onClick={deleteAll}>
              x
            </button>
          </label>
        </form>
        <div ref={anima1}>
          {todos.map((todo) => (
            <div key={todo.id}>
              <div className="todoItemCon">
                <div className="todoItem">
                  {todo.title}
                  <div>
                    <button
                      type="submit"
                      className="delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
