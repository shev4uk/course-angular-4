import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  msgSuccessAdd = '';

  constructor(
    private data: DataService
  ) { }

  ngOnInit(): void {

  }

  addTodo(todo: Todo) {
    this.data.addNewTodo(todo).subscribe((res) => {
      this.msgSuccessAdd = 'Task added';
      setTimeout(() => {
        this.msgSuccessAdd = '';
      }, 3000);
    });
  }

}
