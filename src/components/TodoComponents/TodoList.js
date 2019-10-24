import React from "react";

import Todo from "./Todo.js";

const TodoList = props => {
  return (
    <div className="to-do-list">
      {props.toDos.map(item => (
        <Todo key={item.id} toDo={item} toggleItem={props.toggleItem} />
      ))}
      <button className="clear-btn" onClick={props.clearToDos}>
        Clear To-Dos
      </button>
    </div>
  );
};

export default TodoList;
