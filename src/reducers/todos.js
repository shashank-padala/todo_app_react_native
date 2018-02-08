const todos = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: state.length,
                    text : action.text,
                    completed : false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? {...todo, completed: !todo.completed}
                    : todo
            )
        case 'DELETE_TODO':
            let newState = state.slice();
            newState.splice(action.id,1);
            return newState;
        case 'SET_TODOS':
            return action.todos
        default:
            return state
    }
}

export default todos
