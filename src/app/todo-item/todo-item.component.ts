import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() inputTodo: Todo;
  @Input() id: number;
  @Output() newStatus = new EventEmitter();
  @Output() deleteTodoItem = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.id);
  }

  changeStatus() {
    // console.log(this.inputTodo.status);
    this.newStatus.emit(this.id);
  }

  deleteTodo() {
    this.deleteTodoItem.emit(this.id);
  }

}
