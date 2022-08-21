import { useState } from "react";
import classes from "./ToDoForm.module.css";

const ToDoForm = ({ addToDo }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addToDo(userInput);
    setUserInput("");
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Input a todo..."
        className={classes.Input}
      />
      <button className={classes.Button}>Save</button>
    </form>
  );
};

export default ToDoForm;
