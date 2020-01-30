import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSumbit}>
      <label htlmfor="todo">New ToDo:</label>
      <input
        type="text"
        id="todo"
        name="todo"
        onChange={props.onInputChange}
        value={props.inputText}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
