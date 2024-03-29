import { RequestHandler } from 'express';
import { IdType, TextType, Todo } from '../model/todo';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as TextType).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);

  res.status(201).json({ message: 'Created the todo.', createTodo: newTodo })
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({todos: TODOS});
}

export const updateTodo: RequestHandler<IdType> = (req, res, next) => {
  const todoId = req.params.id;

  const updatedText = (req.body as TextType).text;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText)
  res.json({ message: 'Updated', updatedTodo: TODOS[todoIndex]});
}

export const deleteTodo: RequestHandler = (req, res, next) => {
  const todoId = req.params.id;

  const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

  if (todoIndex < 0) {
    throw new Error('Could not find todo!');
  }

  TODOS.splice(todoIndex, 1);

  res.json( {message: 'Todo deleted!'} );
};