import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  title = 'Todo list';

  listTodo: Todo[] = [{
    name: 'Прибрати хату',
    status: false,
    date: new Date(2020, 10, 21, 11, 0)
  }, {
    name: 'Зробити домашку',
    status: false,
    date: new Date(2020, 10, 23, 19, 0)
  }, {
    name: 'Підключитися на лекцію',
    status: true,
    date: new Date(2020, 10, 19, 18, 0)
  }];

  constructor() { }

  ngOnInit(): void {
  }

  changeStatusItem(i: number) {
    console.log(i);
    this.listTodo[i].status = !this.listTodo[i].status;
  }

  deleteTodoItem(i: number) {
    this.listTodo.splice(i, 1);
  }

}
