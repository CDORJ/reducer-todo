import React, { useReducer } from "react";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducer";

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  

  return (
    <div className="App">
      <p>Hello OG's</p>
      {state.list.map((item) => (
        <p>{item.itemName}</p>
      ))}
      <Todo />
      <TodoForm />
    </div>
  );
}
export default App;
