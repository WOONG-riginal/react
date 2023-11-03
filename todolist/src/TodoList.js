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
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                type="checkbox"
                checked={todo.checked}
                onChange={() => handleToggleTodo(index)}
              />
              <span
                style={{
                  marginRight: "10px",
                  textDecoration: todo.checked ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
            </div>
            <button
              style={{ marginTop: "5px", marginBottom: "5px" }}
              onClick={() => handleDeleteTodo(index)}
            >
              지우기
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;