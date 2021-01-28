import React, { useReducer } from "react";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import { initialState, todoReducer } from "./reducers/todoReducer";
import "./App.css";


function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log("cd: App.js: App: initial state in App: ", state);

  // Method to add a new todo to the list
  const addTodo = text => {
    dispatch({
      type: "ADD_TODOS",
      payload: text,
    });
  };

  // Method to complete the todo item
  const completeTodo = id => {
    dispatch({
      type: "COMP_TODO",
      payload: id
    });
  };

  return (
    <div className="App">
      <p>My Really Dumb Todo List</p>
      <TodoForm addTodo={addTodo} />
      <hr />
      <div>
        {initialState.list.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            todo={todo}
            completeTodo={completeTodo}
            /* removeTodo={removeTodo} */
          />
        ))}
      </div>
    </div>
  );
}
export default App;
