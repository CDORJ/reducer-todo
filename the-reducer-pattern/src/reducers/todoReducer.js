export const initialState = {
    /* Always has to be an object */
    list: [
        {itemName: "Learn Reducer", completed: false, id: 1},
        {itemName: "Learn Redux", completed: false, id: 2},
        {itemName: "Learn React", completed: false, id: 3}]
}

export const todoReducer = (state , action) => {
    switch(action.type){
        
        default: return state
    }
}