import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import { DelayInput } from "react-delay-input";
import { useState } from "react";
import { Col, Container, Form, Row, Button, FormGroup } from "react-bootstrap";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    event.preventDefault();
    setTodos([todoInput, ...todos]);
    setTodoInput("");
  }

  console.log(todos);

  const deleteByIndex = (index) => {
    setTodos((oldValues) => {
      return oldValues.filter((_, i) => i !== index);
    });
  };

  return (
    <>
      <Container>
        <Row className="pt-5">
          <h1>ToDo App</h1>
        </Row>
        <Row>
          <Col>
            <Form>
              <FormGroup>
                <Col>
                  <Form.Label htmlFor="todoInput">Target</Form.Label>
                </Col>
                <Col className="d-flex justify-content-between">
                  <DelayInput
                    className=""
                    id="todoInput"
                    value={todoInput}
                    delayTimeout={300}
                    onChange={(e) => setTodoInput(e.target.value)}
                  />
                  <Button onClick={addTodo} type="submit" variant="primary">
                    Add
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <ul>
              {todos.map((todoInput, index) => (
                <li key={index} className="justify-content-between d-flex">
                  {todoInput}
                  <Button
                  variant="danger"
                    className="mb-2 ms-2"
                    onClick={() => deleteByIndex(index)}
                  >
                    Delete
                  </Button>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
