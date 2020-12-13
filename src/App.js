import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import './App.css';
import {TodoInputContext, TodoContext} from "./context";

function App() {
  let initialTodoArray = window.localStorage.getItem("todos")
  ? JSON.parse(window.localStorage.getItem("todos"))
  : [];

  const [todos, setTodos] = useState(initialTodoArray);

  function addTodo(todo) {
    const newTodos = [
      ...todos,
      {
        todo: todo,
        isCompleted: false,
        id: uuidv4(),
      }
    ]
    setTodos(newTodos);
  }

  function removeTodoByID(id) {
    let newTodos = [...todos];

    newTodos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  function todoDoneByID(id) {
    let newTodos = [...todos];

    newTodos.map((todo) => {
      if (todo.id === id && todo.isCompleted) {
        todo.isCompleted = false;
          return todo;
      }

      if (todo.id === id && !todo.isCompleted) {
        todo.isCompleted = true;
        return todo;
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
