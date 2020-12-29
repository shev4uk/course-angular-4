import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { Todo } from '../models/todo.model';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/YYYY',
  },
  display: {
    dateInput: 'MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class TodoFormComponent implements OnInit {

  @Input() todo: Todo;
  @Input() textButton: string;
  @Output() sendForm = new EventEmitter();

  minDate = new Date();
  newTodo: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.newTodo = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      completed: ['']
    });
    if (this.todo) {
      this.newTodo.patchValue(this.todo);
    }
  }

  changeTodo() {
    this.sendForm.emit(this.newTodo.value);
  }

}
