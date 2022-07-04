import React, { useState } from "react";
import styles from "./ToDo.module.css"
import ToDoItem from "./ToDoItem/ToDoItem";


function ToDo(props) {
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([])

    const onKeyPressHandler = e => {
        if (e.key === 'Enter') {
            e.preventDefault()
            setTodos(prev => [...prev, { id: todos.length, name, isChecked: false }])
            setName('')
        }
    }

    const toggleCheckedToDo = idx => {
        const newArray = [].concat(todos) 
        newArray[idx].isChecked = !newArray[idx].isChecked
        setTodos(newArray)
    }




    return (

        <div className={styles.wrapper}>
         

            <h1>ToDo List</h1>

            {todos &&
                todos.map((todo,idx ) => (
                    <ToDoItem
                        key={`todo${todo.id}`}
                        name={todo.name}
                        idx = {idx}
                        isChecked={todo.isChecked}
                        toggleCheckedToDo={toggleCheckedToDo}
                    />
                ))}

             
            <input className={styles.taskinput} type="text" value={name} onKeyPress={onKeyPressHandler} onChange={e => setName(e.target.value)} placeholder='Введите новую задачу' />

        </div>

    )
}

export default ToDo