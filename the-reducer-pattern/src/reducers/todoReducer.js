export const initialState = {
  /* Always has to be an object */
  list: [
    { itemName: "Learn Reducer", completed: false, id: 1 },
    { itemName: "Learn Redux", completed: false, id: 2 },
    { itemName: "Learn React", completed: false, id: 3 },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      const newTodo = {
        text: action.payload,
        isCompleted: false,
        id: Date.now(),
      };
      return {
        ...state,
        list: [...state.list, newTodo],
      };
    case "COMP_TODO":
      const compTodos = state.list.map((task) => {
          if (task.id === action.payload) {
              return {
                  ...task,
                  isCompleted: !task.isCompleted,
              };
          }
          return task;
      });
      return {
          ...state,
          list: compTodos
      }
    default:
      return state;
  }
};
