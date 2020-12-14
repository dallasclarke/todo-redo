import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import { TodoInputContext, TodoContext } from "./context";
import Todo from "./Todo";
import TodoInput from "./TodoInput";

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
      },
    ];
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
    });
    setTodos(newTodos);
  }

  function showAllTodo() {
    return todos.map((todoList) => {
      return (
        <TodoContext.Provider
          key={todoList.id}
          value={{ todoList, removeTodoByID, todoDoneByID }}
        >
          <Todo />
        </TodoContext.Provider>
      );
    });
  }

  function showTodoInput() {
    return (
      <TodoInputContext.Provider value={{ addTodo }}>
        <TodoInput />
      </TodoInputContext.Provider>
    );
  }

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      {showTodoInput()}
      {showAllTodo()}
    </div>
  );
}

export default App;
