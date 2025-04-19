import React from "react";

function Task({ text, category, onDelete }) {
  function handleClick() {
    onDelete(text); // Send the task text back to App.js for deletion
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleClick}>X</button>
    </div>
  );
}

export default Task;


