import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddItemBar from './AddItemBar'
import TodosList from './TodosList'
import TodosList2 from './TodosList2'

class App extends Component {
  render() {
    return (
      <div>
        <AddItemBar/>
        <h2>List 1</h2>
        <TodosList/>
        <h2>List 2</h2>
        <TodosList2/>
      </div>
    );
  }
}

export default App;
