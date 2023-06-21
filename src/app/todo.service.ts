import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodoList(): Todo[]{
    return [
      { id: 1, title: 'create a service for angular'}
    ];
  }
}
