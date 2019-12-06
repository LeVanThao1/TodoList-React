import React, { Component } from 'react';
import './todoItem.css';
class TodoItem extends Component {
    render() {
        return (
            <div className="TodoItem">
                <input type="checkbox" className="input" onClick={}></input><span>{ this.props.title }</span>
            </div>
        )
    }
}

export default TodoItem;