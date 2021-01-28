import React from "react"; 
 
 const ToDoList = ({toDo, dispatch}) => {
   
   /* const toggleCompleted = (e) => {
      dispatch({
         type: "TOGGLE_ITEM",
         payload: e.target.key
      })
   } */
   
   return (
      <ul>
         {toDo.map((item)=>(
            <li key={item.id} /* onClick={toggleCompleted} */>
               {item.name}
            </li>
         ))}
      </ul>
   );
};

export default ToDoList