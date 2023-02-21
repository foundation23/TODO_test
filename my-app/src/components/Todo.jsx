import React from 'react';
import "./todo.css"

const Todo = ({todo, update, remove}) => {

    const handleRemove = (event) => {
        event.stopPropagation()
        remove(todo)
    }

    const handleUpdate = () => {
        const title = prompt() || ""
        update({...todo, title})
    }
    const handleUpdateCompleted = (todo) => {
        let completed = !todo.completed
        update({...todo, completed})
    }

    return (
        <div className="item-todo">
            <div className="container_content">
                <form className="item-todo__check">
                    <input className="input-check"
                           onClick={handleUpdateCompleted}
                           id="checkbox"
                           type="checkbox">
                    </input>
                </form>
                <label className={`task-item ${todo.completed ? "completed" : ""}`}>
                    {todo.title}
                </label>
            </div>
            <div className="container_change">
                <label className="item-delete"
                       onClick={handleRemove}>
                    ✖
                </label>
                <label className="item-update"
                       onClick={handleUpdate}>
                    ✒
                </label>
            </div>

        </div>
    );
};

export default Todo;