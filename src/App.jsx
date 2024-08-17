//import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { Button, Form } from "react-bootstrap";
import { ToDoList } from "./ToDoList";

function App() {
 // const [todoInput, setTodoInput] = useState("");
 // const [todos, setTodos] = useState(["Elma al", "Resim çiz"]);

  return (
    <>
      <h1>ToDo App</h1>
      <ToDoList/>
    </>
  );
}

export default App;
