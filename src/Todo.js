import React, { useContext } from "react";

import { TodoContext } from "./context";

const Todo = () => {

    const {
        todoList: { todo, id, isCompleted},
        removeTodoByID,
        todoDoneByID,
    } = useContext(TodoContext);

  return (
    <div>

    </div>
    )
};

export default Todo;
