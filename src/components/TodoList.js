import React from "react";
import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
