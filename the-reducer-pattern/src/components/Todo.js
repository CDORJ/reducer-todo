import React from "react";

const Todo = ({ todo, id, completeTodo, removeTodo }) => {
  return (
    <div style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.itemName}

      <div>
        <button onClick={() => completeTodo(id)}>Complete</button>
        <button onClick={() => removeTodo(id)}>Remove</button>
      </div>
    </div>
  );
};

export default Todo;
