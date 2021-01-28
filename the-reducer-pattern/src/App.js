import React, { useReducer } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import todoReducer, { initialState } from "./reducers/todoReducer";

function App() {
  const [todo, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      {todo.todoList.map((todos) => (
        <p>{todos.todo}</p>
      ))}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
