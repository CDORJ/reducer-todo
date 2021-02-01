
import './App.css';
import React, { useReducer } from "react"
import { toDoReducer, initialState } from './reducers/toDoReducer'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [toDo, dispatch] = useReducer(toDoReducer, initialState);

  return (
    <div className="App">
      <h3>This is my to-do list</h3> 
      <ToDoList toDo={toDo} dispatch={dispatch}/>
      <ToDoForm dispatch={dispatch} />
    </div>
  );
}

export default App;
