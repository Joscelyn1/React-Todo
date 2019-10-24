import React from "react";

const Todo = props => {
  return (
    <div
      className={`toDo${props.toDo.completed ? " completed" : ""}`}
      onClick={() => props.toggleItem(props.toDo.id)}
    >
      <p>{props.toDo.name}</p>
    </div>
  );
};

export default Todo;
