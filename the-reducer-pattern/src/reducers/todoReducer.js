export const initialState = {
  /* INITIAL STATES MUST ALWAYS BE OBJECTS */
  todoList: [
    {
      todo: "Wake Up",
      isCompleted: false,
      id: 1,
    },
    {
      todo: "Brush Teeth",
      isCompleted: false,
      id: 2,
    },
    {
      todo: "Be on time for class!",
      isCompleted: false,
      id: 3,
    },
  ],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            todo: action.payload,
            isCompleted: false,
            id: Date.now(),
          },
        ],
      };
    case "REMOVE":
      return { ...state };
    case "CLEAR_COMPLETED":
      return { ...state };
    case "CLEAR_ALL":
      return { ...state };
    case "TOGGLE_COMPLETED":
      /* Map through state.todoList and search for the who's task.id matches the action.payload. Then, change that task's isCompleted to be the opposite of what it is, using "!" */
      return {
        ...state,
        todoList: state.todoList.map((task) => {
          if (task.id === action.payload) {
            return {
              ...task,
              isCompleted: !task.isCompleted,
            };
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};

export default todoReducer;
