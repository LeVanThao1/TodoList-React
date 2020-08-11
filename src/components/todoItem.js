import React, { PureComponent, memo } from 'react';
import './todoItem.css';
import classNames from 'classnames';
import check from '../img/verified.svg';
import checkDone from '../img/success.svg';
import PropTypes from 'prop-types';

class TodoItem extends PureComponent {
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

TodoItem.propTypes = {
    item: PropTypes.shape({
        isComplete: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    }),
    onClick: PropTypes.func
}
export default memo(TodoItem);