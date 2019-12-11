import React from 'react';
import './App.css';
import { Component } from 'react';
import TodoItem from './components/todoItem';
import tick from './img/tick-sign.svg';
import classNames from 'classnames'
class App extends Component {
  constructor(){
    super();
    this.state = {
      case: "",
      emptyItem: "",
      TodoList: [
        { title: "Đi Chơi", isComplete: true }, 
        { title: "Đi Ngủ", isComplete: false }, 
        { title: "Đi Xem Phim", isComplete: false }  
      ],
      defaultAll : false
    };
    this.onAddItem = this.onAddItem.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onClickAll = this.onClickAll.bind(this);
    this.onClickSelectActive = this.onClickSelectActive.bind(this);
    this.onClickSelectAll = this.onClickSelectAll.bind(this);
    this.onClickSelectCompleted = this.onClickSelectCompleted.bind(this);
    this.onClickClear = this.onClickClear.bind(this);
  }
  onClickedItem (item) {
    return (event) => {
      const isComplete = item.isComplete;
      const { TodoList } = this.state;
      const index = TodoList.indexOf(item);
      this.setState({
        TodoList: [
          ...TodoList.slice(0, index),
          {
            ...item, isComplete: !isComplete
          },              
          ...TodoList.slice(index + 1)
        ]
      });
    }
  }

  onAddItem (event) {
    let text = event.target.value;
    if (event.keyCode === 13) {
      if (!text) {
        return;
      }
      text = text.trim();
      if (!text) {
        return;
      }
      this.setState({
        emptyItem: "",
        TodoList: [
          { title: text, isComplete: false },
          ...this.state.TodoList
        ]
      });
      event.target.value = "";
    } 
  }

  onChange(event) {
    this.setState({
      emptyItem: event.target.value
    });
  }

  onClickAll() {
    this.setState({
      TodoList: this.state.TodoList.map(item => {
        item.isComplete = !this.state.defaultAll;
        return item;
      }),
      defaultAll: !this.state.defaultAll
    });
  }

  onClickClear () {
    this.setState({
      TodoList: this.state.TodoList.filter(item => !item.isComplete)
    });
  }
  onClickSelectActive () {
    this.setState({
      ...this.state,
      case: "Active"
    });
  }

  onClickSelectAll () {
    this.setState({
      ...this.state,
      case: "All"
    });
  }

  onClickSelectCompleted () {
    this.setState({
      ...this.state,
      case: "Completed"
    });
  }
  render() {
    return (
      <div className="App">
        
        <div className="Header">
          <img src={tick} width={32} onClick={this.onClickAll}></img>
          <input type="text" value={this.emptyItem} placeholder="What need to be done ?" onChange={this.onChange} onKeyUp={this.onAddItem} className={classNames({focusing: this.state.emptyItem !== ""})} ></input>
        </div>
        {
          this.state.TodoList.length > 0 && this.state.TodoList.map((item, index) => 
            <TodoItem 
              item = { item } 
              key = { index } 
              cases = { this.state.case }
              onClicked={this.onClickedItem(item)}
            />
          )
        }
        {
          this.state.TodoList.length === 0 && <div className="notify">Nothing Item</div>
        }
        <div className="Footer">
          <span className="todo-count">{this.state.TodoList.reduce((count, a)=> count + !a.isComplete,0)} Item left</span>
          <ul className="filter">
            <li onClick={this.onClickSelectAll} className={ classNames({select: this.state.case==="All"})}>All</li>
            <li className={ classNames({select: this.state.case==="Active"})} onClick={this.onClickSelectActive}>Active</li>
            <li onClick={this.onClickSelectCompleted} className={ classNames({select: this.state.case==="Completed"})}>Completed</li>
          </ul>
          {
            this.state.TodoList.reduce((count, a)=> count + a.isComplete,0) > 0 && <button className="Clear-Completed" onClick={this.onClickClear}>Clear Completed</button>
          }
          
        </div>
      </div>
    );
  }
}

export default App;
