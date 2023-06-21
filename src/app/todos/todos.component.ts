import { Component } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  todoList: Todo[] = [];

  constructor(
    private todoService: TodoService
  ){
    this.todoList = this.todoService.getTodoList();
  }
  
}
