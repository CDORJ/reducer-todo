
import './App.css';
import React, { useReducer } from "react"
import { toDoReducer, initialState } from './reducers/toDoReducer'
import ToDoList from './components/ToDoList'
import ToDoForm from './components/ToDoForm'

function App() {
  const [toDo, dispatch] = useReducer(toDoReducer, initialState)
  
  return (
    <div className="App">
     <form>
       <input type="text"></input>
       <button>Add</button>
     </form>
     <ToDoList toDo={toDo}/>
     <ToDoForm />
    </div>
  );
}

export default App;
