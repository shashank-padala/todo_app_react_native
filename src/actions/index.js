const addTodo = text => {
    return {
        type: 'ADD_TODO',
        text
    }
}

const toggleTodo = id => {
    return {
        type : 'TOGGLE_TODO',
        id
    }
}

const deleteTodo = id => {
    return {
        type: 'DELETE_TODO',
        id
    }
}

const setTodos = todos => {
    return {
        type: 'SET_TODOS',
        todos
    }
}

export {addTodo, toggleTodo, deleteTodo , setTodos};
