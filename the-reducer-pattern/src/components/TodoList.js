import React from "react";

const TodoList = (props) => {
  const todo = props.todo;
  const dispatch = props.dispatch;

  /*  const handleClick = (e) => {
    dispatch({
      type: "TOGGLE_COMPLETED",
      payload: e.target.id,
    });
  }; */

  return (
    <div>
      {todo.todoList.map((task) => (
        <p
          key={task.id}
          onClick={() => {
            dispatch({
              type: "TOGGLE_COMPLETED",
              payload: task.id,
            });
          }}
          /* onClick={handleClick} */
        >
          {task.todo}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
