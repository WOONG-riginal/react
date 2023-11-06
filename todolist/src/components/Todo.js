import React from 'react'
// 폰트어썸 때문에 에러 발생함
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
// import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
        <button className="edit-icon" onClick={() => editTodo(task.id)}>EDIT</button>
        <button className="delete-icon" onClick={() => deleteTodo(task.id)}>DELETE</button>
        {/* <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} /> */}
        </div>
    </div>
  )
}