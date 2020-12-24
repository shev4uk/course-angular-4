import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { DataService } from 'src/app/shared/services/data.service';

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
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
  providers: [
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class TodoAddComponent implements OnInit {

  minDate = new Date();
  newTodo: FormGroup;

  constructor(
    private fb: FormBuilder,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.newTodo = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      createdAt: ['', [Validators.required]],
      priority: ['', [Validators.required]],
      completed: ['']
    });
  }

  addTodo() {
    console.log(this.newTodo.value);
    this.data.addNewTodo(this.newTodo.value).subscribe((res) => {
      console.log(res);
    });
  }

}
