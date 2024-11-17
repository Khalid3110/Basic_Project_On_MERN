import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Todo Task", id: uuidv4(), isDone: false },
  ]);
  let [newTask, setNewTask] = useState("");

  let addNewTodo = () => {
    setTodos((prev) => {
      return [...prev, { task: newTask, id: uuidv4(), isDone: false }];
    });
    setNewTask("");
  };

  let removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  let doneTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id == id) {
          return { ...todo, isDone: true };
        } else {
          return todo;
        }
      })
    );
  };

  let allDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  let storeNewTask = (event) => {
    setNewTask(event.target.value);
    // console.log(newTask);
  };
  return (
    <>
      <h3>Simple Todo </h3>
      <input type="text" value={newTask} onChange={storeNewTask} />
      <br />
      <button onClick={addNewTodo}>Add</button>

      <br />
      <br />

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={todo.isDone ? { textDecoration: "line-through" } : {}}
          >
            {todo.task}
            <button onClick={() => removeTodo(todo.id)}>delete</button>
            <button onClick={() => doneTask(todo.id)}>Done</button>
          </li>
        ))}
        <button onClick={allDone}>Mask As All Done</button>
      </ul>
    </>
  );
}

export default TodoList;
