import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  
  todo: Todo;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.data.getTodoById(this.id).subscribe((res) => {
      this.todo = res;
    })
  }

  editTodo(todo: Todo) {
    console.log(todo);
    this.data.editTodo(todo, this.id).subscribe((res) => {
      console.log(res);
    })
  }

}
