import React from "react";
// in it's own component because it doesn't require state
// destructured props for state

 const ToDoList = ({toDoListItems}) => {

    return (
        // mapping over state to show each task item on dom
         <div >
          {toDoListItems.map((task) => (
              // always need a key when mapping, id is unique to each item
            <p key={task.id}>
              {task.taskName}
            </p>

          ))}
    </div> 
    )
}

export default ToDoList
