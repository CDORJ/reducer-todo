import React, { useState } from "react";

const ToDoForm = (props) => {
    const [newTask, setNewTask] = useState("")
    
    // const addListItem = (e) => {
    //     e.preventDefault();
    //     dispatch({
    //         type: "ADD",
    //         payload: task
    //     });
    //     setTask("")
    //   }

    // const inputText = (e) => {
    //     setTask(e.target.value)
    // }

    const handleChange = (e) => {
        e.preventDefault();
        setNewTask(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        props.dispatch({ type: "ADD", payload: newTask });
        setNewTask("");
      };
      
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={newTask} onChange={handleChange}></input>
            <button>Add</button>
        </form>
    ) 
 }
 
 export default ToDoForm