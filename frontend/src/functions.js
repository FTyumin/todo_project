import React, { Component } from "react";
function Program() {
    const [todos, setTodos] = React.useState([
      {
        text: "This is a sampe todo",
        isDone: false
      }
    ])
}

function Todo({ todo, index, markTodo, removeTodo }) {
    return (
      <div
        className="todo"
        
      >
        <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
        <div>
          <Button variant="outline-success" onClick={() => markTodo(index)}>✓</Button>{' '}
          <Button variant="outline-danger" onClick={() => removeTodo(index)}>✕</Button>
        </div>
      </div>
    );
}

export default Program;Todo



