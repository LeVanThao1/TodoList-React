import React from 'react';
import './App.css';
import { Component } from 'react';
import TodoItem from './components/todoItem'

class App extends Component {
  constructor(){
    super();
    this.TodoList = ["Đi Chơi", "Đi Ngủ", "Xem Phim"];
  }
  render() {
    return (
      <div className="App">
        {
          this.TodoList.map((item, index) => <TodoItem title={ item } key={ index } />)
        }
      </div>
    );
  }
}

export default App;
