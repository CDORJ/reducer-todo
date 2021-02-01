import React from "react"; 
 
 const ToDoList = (props) => {
    const toDo = props.toDo
    const dispatch = props.dispatch
   // const toDoMap = toDo
   // const dispatchMatch = dispatch
   /* const toggleCompleted = (e) => {
      dispatch({
         type: "TOGGLE_ITEM",
         payload: e.target.key
      })
   } */
   
   return (
      <div style={{ textDecoration: toDo.toDos.isCompleted ? "line-through" : "" }}>
      {toDo.toDos.map((task) => (
        <p
          key={task.id}
         onClick={() => {
         dispatch({
         type: "TOGGLE_ITEM",
         payload: task.id,
         });
         }}
       
        >
          {task.name}
        </p>
      ))}
    </div>
   );
};

export default ToDoList