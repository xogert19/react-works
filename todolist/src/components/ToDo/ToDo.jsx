import classes from "./ToDo.module.css";

const ToDo = ({ todo, toggleComplete, removeTask }) => {
  return (
    <div className={classes.ToDo} key={todo.id}>
      <div
        className={`${classes.text} ${
          todo.isComplete ? classes.completed : ""
        }`}
        onClick={() => toggleComplete(todo.id)}
      >
        {todo.task}
      </div>

      <div className={classes.deleteButton} onClick={() => removeTask(todo.id)}>
        X
      </div>
    </div>
  );
};

export default ToDo;
