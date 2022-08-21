import { useState } from "react";
import ToDo from "../ToDo/ToDo";
import ToDoForm from "../ToDoForm/ToDoForm";
import classes from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addToDo = (userInput) => {
    if (userInput) {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        isComplete: false,
      };

      setTodos([...todos, newTodo]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const toggleComplete = (id) => {
    setTodos([
      ...todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      }),
    ]);
  };

  return (
    <div className={classes.App}>
      <div className={classes.background}></div>
      <ToDoForm addToDo={addToDo} />
      {todos.map((todo) => {
        return (
          <ToDo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTask={removeTask}
          />
        );
      })}
    </div>
  );
};

export default App;
