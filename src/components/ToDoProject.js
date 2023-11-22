import React, { useState } from "react";
import { TodoForm } from "./TodoList"
import { Todo } from "./Todo"
import { v4 as uuidv4 } from "uuid";
import { EditTodoForm } from "./EditTodo";
uuidv4();

export const ToDoProject = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo, category) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
        category: category,
      },
    ]);
    console.log(todos);
  };
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1 className="todo__title">
        What's up, <span>Beka</span>
      </h1>
      <h4 className="todo__subtitle">CREATE A TODO</h4>
      <p className="todo__text">Whats's on your todo list?</p>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            category={todo.category}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default ToDoProject;
