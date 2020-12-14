import React, { useContext } from "react";

import { TodoContext } from "./context";

const Todo = () => {
  const {
    todoList: { todo, id, isCompleted },
    removeTodoByID,
    todoDoneByID,
  } = useContext(TodoContext);

  return (
    <div style={{ textDecoration: isCompleted ? "line-through" : "" }}>
      {todo}
      <div>
        <button onClick={() => todoDoneByID(id)}>Done</button>
        <button onClick={() => removeTodoByID(id)}>Delete</button>
      </div>
      <hr />
    </div>
  );
};

export default Todo;
