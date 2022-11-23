import { useState } from "react";
import styles from "../styles/Home.module.css";

export const AddTodoForm = () => {
  const [todo, setTodo] = useState("");

  const submit = () => {
    if (todo !== "") { // check that todo is not empty
      fetch("/api/add-todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          todo,
        }),
      }).then(() => window.location.reload());
    }
    console.log("todo>>",todo)
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
        setTodo('');
      }}
      className={styles.label}
      style={{padding: '0 0 0 40px', margin: '40px 0 0'}}
    >
      <label>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Write some code?"
          style={{height: 35, padding: '0 10px', width: 260}}
        />
      </label>
      <button className={styles.btn}>Save</button>
    </form>
  );
};
