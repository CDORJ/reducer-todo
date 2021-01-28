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
      return { ...state, };
    case "REMOVE":
      return { ...state };
    case "CLEAR_COMPLETED":
      return { ...state };
    case "CLEAR_ALL":
      return { ...state };
    case "TOGGLE_COMPLETED":
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
