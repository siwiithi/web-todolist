import addTodo from './actions'

const initialState = {
  todos: [{
    text: '',
    isCompleted: false
  }]
}

const todoApp = (state=initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [{
          text: action.text,
          isCompleted: true
        }]
      }
  }
}