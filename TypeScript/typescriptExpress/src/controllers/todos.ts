import { RequestHandler } from "express";
import { Todo } from "../models/todos";

const todos: Todo[] = [];
export const createTodo: RequestHandler = (req,res,next) => {
    const text = (req.body as {text:string}).text;
    const newTodo = new Todo(Math.random().toString(),text);    
    todos.push(newTodo);
    res.json({message:'create new Todo', createTodo:newTodo});
};

export const getTodos: RequestHandler = (req,res,next) => {
    res.json({message:'get all todos', todos:todos});
};