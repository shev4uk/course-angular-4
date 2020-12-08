import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todo = [];

  constructor() {
    if (localStorage.getItem('todo')) {
      this.todo = JSON.parse(localStorage.getItem('cart') as string);
    }
  }

  getTodo() {
    
  }

  addTodoStorage(todo) {
    this.todo.push(todo);
    localStorage.setItem('todo', JSON.stringify(this.todo));
  }
}
