import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import './App.css';
import {TodoInputContext, TodoContext} from "./context";

function App() {
  let initialTodoArray = window.localStorage.getItem("todos")
  ? JSON.parse(window.localStorage.getItem("todos"))
  : [];

  const [todos, setTodos] = useState(initialTodoArray);


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
