import { Injectable } from '@angular/core';
import { TodoTask } from '../Model/todo-task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  storageKey = 'ToDo-List';
  
  saveTodos(todos: string[]): void {
  localStorage.setItem(this.storageKey, JSON.stringify(todos));
  }

  getToDo() {
    const todoJson = localStorage.getItem(this.storageKey);
    return todoJson ? JSON.parse(todoJson) : [];
  }

  addToDo(todo: string) {
    const todos = this.getToDo();
    todos.push(todo);
    this.saveTodos(todos);
  }
  
  removeAll (){
    this.saveTodos([]);
  }


  removeTask(i: number): void{

      const todos = this.getToDo();
      todos.splice(i, 1);
      this.saveTodos(todos);
   
  }

}
