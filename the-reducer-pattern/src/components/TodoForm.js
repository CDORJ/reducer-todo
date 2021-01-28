import React, { useState } from "react";

const TodoForm = (props) => {
  const [newItem, setNewItem] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setNewItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.dispatch({ type: "ADD", payload: newItem });
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newItem} onChange={handleChange} />
      <button>Add the shit</button>
    </form>
  );
};

export default TodoForm;
