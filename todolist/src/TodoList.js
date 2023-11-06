import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    // 공백 제거를 위해 trim() 활용
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), checked: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h1>To Do List</h1>
      <input className="todo-add"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="add-btn" onClick={handleAddTodo}>추가</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
          >
            <div className="todo-txt">
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              {/* 할 일 완료 시 가로줄 긋기 */}
              <p>{todo.text}</p>
            </div>
            <button className="delete-btn" onClick={() => handleDeleteTodo(index)}>
              지우기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;