import React, { useState } from "react";

const ToDoListForm = ({ items, dispatch }) => {
  const [newInput, setNewInput] = useState("");

  // what happens when the user types into the input field:
  //  set the event target value to state

  const inputValue = (e) => {
    setNewInput(e.target.value);
  };

  // when the Add Button is clicked, prevent refresh
  // when the Add Button is click it dispatches to the reducer to seek designated action
  // the payload is you need to send over the value (the newInput, in state) over

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_TODO",
      payload: newInput,
    });
    setNewInput(""); // after adding, return the input text field to an empty state
  };

  // remove the completed items 
  const removeCompleted = (e) => {
      e.preventDefault();
    dispatch({
        type: "REMOVE_COMPLETED",
    })
  }

  
  return (
    <div>
      <br></br>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newInput} onChange={inputValue}></input>
        <button>Add</button>
      </form>
      
      {/* // on click send to removeCompleted function which sends to dispatch */}
      <button onClick={removeCompleted}>Remove completed</button>
     
    </div>
  );
};

export default ToDoListForm;
