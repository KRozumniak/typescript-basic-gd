import React, { useId, useState } from "react";
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

function App() {
  const id = useId();

  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [...prevTodos, { id: id + Math.random(), text }]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
}

export default App;
