import React from "react";
import { Todo } from '../todo.model';

import "./TodoList.css";


export interface TodoListProps {
  items: Todo[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button onClick={() => props.onDeleteTodo(item.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
