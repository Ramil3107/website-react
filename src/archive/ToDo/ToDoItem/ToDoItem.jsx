import React from "react";
import styles from "./ToDoItem.module.css"

function ToDoItem({ idx, name, isChecked, toggleCheckedToDo}) {
    return (
        <div className={styles.wrapper}>
            
            <div className={styles.todoitem} onClick={() => toggleCheckedToDo(idx)}>
                <input type="checkbox" checked={isChecked} readOnly/>
                <span className="name">{name}</span>
            </div>

        </div>
    )
}

export default ToDoItem