import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private todoService: TodoService
  ) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      name: ''
    })
  }

  addTodo() {
    console.log(this.todoForm.value);
    this.todoService.addTodoStorage(this.todoForm.value);
  }

  updateItemTodo(event) {
    console.log(event.currentTarget.checked);
  }

}
