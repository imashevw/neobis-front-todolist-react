import React, { useState } from "react";
import "./Todo.css";
export const Todo = ({
  task,
  category,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="Todo list">
      <div className="todo__item-wrapper list">
        <div className="todo-item">
          <label>
            <input type="checkbox" onClick={() => toggleComplete(task.id)} />
            <span className={`bubble ${category} list`}></span>
          </label>
        </div>
        <p className={`${task.completed ? "completed" : ""}`}>{task.task}</p>
      </div>
      <div>
        <button className="btn-edit btn" onClick={() => editTodo(task.id)}>
          Edit
        </button>
        <button className="btn-delete btn" onClick={() => deleteTodo(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Todo;
