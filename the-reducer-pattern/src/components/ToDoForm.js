import React, { useState } from "react";

const ToDoForm = ({dispatch}) => {
    const [task, setTask] = useState("")
    
    const addListItem = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD",
            payload: task
        });
        setTask("")
      }

    const inputText = (e) => {
        setTask(e.target.value)
    }

      
    return (
        <form>
            <input type="text" value={task} onChange={inputText}></input>
            <button onClick={addListItem} >Add</button>
        </form>
    ) 
 }
 
 export default ToDoForm