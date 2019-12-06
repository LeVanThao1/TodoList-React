import React from 'react';
import './App.css';
import { Component } from 'react';
import TodoItem from './components/todoItem'

class App extends Component {
  constructor(){
    super();
    this.TodoList = [
      { title: "Đi Chơi", isComplete: true }, 
      { title: "Đi Ngủ", isComplete: false }, 
      { title: "Đi Xem Phim", isComplete: false }  
    ];
  }
  render() {
    return (
      <div className="App">
        {
          this.TodoList.length > 0 && this.TodoList.map((item, index) => <TodoItem item = { item } key = { index } />)
        }
        {
          this.TodoList.length === 0 && 'Nothing Item'
        }
      </div>
    );
  }
}

export default App;
