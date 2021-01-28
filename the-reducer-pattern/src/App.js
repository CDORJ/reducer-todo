import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import todoReducer, { initialState } from "./reducers/todoReducer";

function App() {
  const [todo, dispatch] = useReducer(todoReducer, initialState);
  return (
    <div className="App">
      <TodoForm dispatch={dispatch} />
      <TodoList todo={todo} dispatch={dispatch}/>
    </div>
  );
}

export default App;
