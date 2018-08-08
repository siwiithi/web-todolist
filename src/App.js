import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoListContainer from './list/todoListContainer'
import 

const store = createStore(rootReducer)
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoListContainer />
      </Provider>
    );
  }
}

export default App;
