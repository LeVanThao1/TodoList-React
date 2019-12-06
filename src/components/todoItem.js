import React, { Component } from 'react';
import './todoItem.css';
class TodoItem extends Component {
    render() {
        const { item } = this.props;
        let className = "TodoItem ";
        if (item.isComplete) {
            className += " TodoItemComplete";
        }
        return (
            <div className={ className }>
                <input type="checkbox" className="input"></input><span>{ item.title }</span>
            </div>
        )
    }
}

export default TodoItem;