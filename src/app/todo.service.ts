import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList:Todo[] = [
    { id: 1, title: 'create a service for angular'}
  ];

  constructor() { }

  getTodoList(): Todo[]{
    return this.todoList;
  }

  addTodoItem(todoItem: Todo): void{
    this.todoList.push(todoItem);
  }
}
