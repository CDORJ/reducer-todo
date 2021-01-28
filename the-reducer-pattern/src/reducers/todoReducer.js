export const initialState = {
  /* Always has to be an object */
  list: [
    { itemName: "Learn Reducer", isCompleted: false, id: 1 },
    { itemName: "Learn Redux", isCompleted: false, id: 2 },
    { itemName: "Learn React", isCompleted: false, id: 3 },
  ],
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODOS":
      const newTodo = {
        itemName: action.payload,
        isCompleted: false,
        id: Date.now(),
      };
      return {
        ...state,
        list: [...state.list, newTodo],
      };
    case "COMP_TODOS":
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
        list: compTodos,
      };
    case "REMOVE_TODO":
      const todoListWithRemovedTask = state.list.filter((task) => {
        return task.id !== action.payload;
      });
      return {
        ...state,
        list: todoListWithRemovedTask,
      };

    default:
      return state;
  }
};
