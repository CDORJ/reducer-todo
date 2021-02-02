
// helpful website
// https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow 


// state of the application living in the reducer file

// export the state where needed
export const initialState = {
  // NOTE always has to be an object
  listOfTodos: [
    // an array of objects inside of an object
    // isCompleted state is initialized to false
    // need an id to map and differentiate between tasks
    { taskName: "brush teeth", isCompleted: false, id: 1 },
    { taskName: "drink coffee", isCompleted: false, id: 2 },
    { taskName: "put on playlist", isCompleted: false, id: 3 },
    { taskName: "study", isCompleted: false, id: 4 },
    { taskName: "submit assignment", isCompleted: false, id: 5 },
    { taskName: "contact Chad and Orlando", isCompleted: false, id: 6 },
  ],
};

// exporting each individually, would be exporting default if there was only one thing being exported

export const toDoListReducer = (state, action) => {
    // convention to name reducer same as file
// check to see if the reducer cares about this action
    switch (action.type) { // switch is just convention // type is mandatory
        case "ADD_TODO": { // NOTE NO COLON AFTER CASE !!! 
            return {
                ...state, // that has all the existing state data
                // but has a new array for the listOfTodos field
                listOfTodos: [
                     ...state.listOfTodos, // with all of the old todos
                     
                     { // and the new listOfTodos object
                        taskName: action.payload, //(going to be the value of the input field)
                        isCompleted: false,
                        id: Date.now(),
                     }
                ]
            }
        }  

        case 'TOGGLE_TODO': {
            return {
                // again, always copy entire state object
                ...state,
            listOfTodos: state.listOfTodos.map(task => { 
                if (task.id !== action.payload) {
        // if this isn't the todo item we're looking for, leave it unchanged
                    return task
                }
                return {
                    ...task,
                    //flip the completed name
                    isCompleted: !task.isCompleted
                }

            })
            }
        }


        default: // if the reducer doesn't recognize the action type, or doesn't care about this specific action, return the existing state unchanged
            return state
    }
}
    


