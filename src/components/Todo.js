import React from "react";

function Todo({ todo, index, deleteTodo }) {
  return (
    <div>
      <span>{todo}</span>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;
