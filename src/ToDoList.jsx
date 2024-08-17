const todos = ["asd", "12321"];

export function ToDoList(todos) {
  return (
    <>
      <p>ToDo List</p>
      <ul>
        {todos.map((item, index) => (
          <ToDoItem key={index} todo={item} />
        ))}
      </ul>
    </>
  );
}

export function ToDoItem(todos) {
  return <li>{todos}</li>;
}
