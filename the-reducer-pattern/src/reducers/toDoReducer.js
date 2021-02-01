export const initialState = {
    toDos: [
        {
            name: 'Wake up',
            id: 1,
            isCompleted: false
        },
        {
            name: 'Brush teeth',
            id: 2,
            isCompleted: false
        },
        {
            name: 'Study',
            id: 3,
            isCompleted: false
        },
    ]
}

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case "ADD": 
            return {
                ...state, 
                toDos: [...state.toDos,
                    {
                        name: action.payload,
                        id: Date.now(),
                        isCompleted: false
                    }
                ]
            };
            case "REMOVE":
            return {...state };
            case "CLEAR_COMPLETED":
                return { ...state };
                case "CLEAR_ALL":
                    return {...state};
        case "TOGGLE_ITEM":
            /* Map over the tasks to see if the action.payload === the item's id. If yes, then we want to change isCompleted to opposite of what it currently is. If no, return the unchanged task. */
            return {
                ...state,
                toDos: state.toDos.map((task) => {
                    if(task.id === action.payload) {
                        return {
                            task,
                            isCompleted: !task.isCompleted,
                        };
                    } else {
                        return task
                    }
                    }),
                };
                default: 
                return state;
            }
        };
//         case "CLEAR": 
//             return {...state, }
        
            
//     default:
//         return state
// }}