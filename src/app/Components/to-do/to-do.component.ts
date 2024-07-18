import { Component } from '@angular/core';
import { TodoService } from '../../Services/todo.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  newTodo: string = '';
  todos: string[] = [];

  constructor(private _TodoService: TodoService) { }

  addTodo() {
    if (this.newTodo.trim()) {
      this._TodoService.addToDo(this.newTodo.trim());
      this.newTodo = '';
      this.todos = this._TodoService.getToDo();
    }
  }


  remove() {
    this.todos = [];
    localStorage.clear();
  }

  removeTask(i: number){
    this._TodoService.removeTask(i);
    this.todos = this._TodoService.getToDo();
  }
}
