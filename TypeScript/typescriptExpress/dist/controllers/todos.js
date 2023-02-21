"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTodos = exports.createTodo = void 0;
const todos_1 = require("../models/todos");
const todos = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    const newTodo = new todos_1.Todo(Math.random().toString(), text);
    todos.push(newTodo);
    res.json({ message: 'create new Todo', createTodo: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.json({ message: 'get all todos', todos: todos });
};
exports.getTodos = getTodos;
