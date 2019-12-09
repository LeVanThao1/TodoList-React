import React, { Component } from 'react';
import './todoItem.css';
import classNames from 'classnames'
import check from '../img/verified.svg'
import checkDone from '../img/success.svg'

class TodoItem extends Component {
    render() {
        const { item, onClicked, cases } = this.props;
        let urlImage = check;
        if (item.isComplete) {
            urlImage = checkDone
        }
        if (cases === "Active") {
            return (
                !item.isComplete && <div className={ classNames("TodoItem", { TodoItemComplete: item.isComplete })}>
                <img src={urlImage} width={32} onClick = {onClicked}></img>
                <p>{ item.title }</p>
                </div>
            )
        } else if (cases === "Completed") {
            return (
                item.isComplete && <div className={ classNames("TodoItem", { TodoItemComplete: item.isComplete })}>
                <img src={urlImage} width={32} onClick = {onClicked}></img>
                <p>{ item.title }</p>
                </div>
            )
        }
        return (
            <div className={ classNames("TodoItem", { TodoItemComplete: item.isComplete })}>
                <img src={urlImage} width={32} onClick = {onClicked}></img>
                <p>{ item.title }</p>
            </div>
        )
    }
}

export default TodoItem;