import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value, category);
    setValue("");
  };

  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todoInput"
        placeholder="e.g get a bread"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <div className="category__wrapper">
        <label className="list">
          <input
            type="radio"
            name="category-b"
            id="category1"
            value="business"
            onChange={(e) => setCategory(e.target.value)}
            checked={category === "business"}
          />
          <span className="bubble business list"></span>
          <div>business</div>
        </label>
        <label className="list">
          <input
            type="radio"
            name="category"
            id="category2"
            value="personal"
            onChange={(e) => setCategory(e.target.value)}
            checked={category === "personal"}
          />
          <span className="bubble personal list"></span>
          <div>personal</div>
        </label>
      </div>
      <button type="submit" className="addBtn btn">
        Add todo task
      </button>
    </form>
  );
};
export default TodoForm;
