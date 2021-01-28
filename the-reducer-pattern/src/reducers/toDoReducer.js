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
            return {...state, }
        case "TOGGLE_ITEM": 
            return {...state, }
        case "CLEAR": 
            return {...state, }
        
            
    default:
        return state
}}