import React from "react";
import '../index.css'
// in it's own component because it doesn't require state
// destructured props for state


 const ToDoList = ({toDoListItems, dispatch}) => {

  // const handleClick = e => {
  //   toDoListItems.isCompleted ? true : style= {{textDecoration: "strike-through"}} : toDoListItems
  // }


    return (
        // mapping over state to show each task item on dom
         <div>
          {toDoListItems.map((task) => (
              // always need a key when mapping, id is unique to each item
            <p 
              onDoubleClick={() => {
                dispatch({
                  type: "TOGGLE_TODO",
                  payload: task.id,
                })
              }}
              className={task.isCompleted ? "strike" : ""}
              key={task.id}>
              {task.taskName}
            </p>

          ))}
    </div> 
    )
}

export default ToDoList
