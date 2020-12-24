import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Priority, Todo } from 'src/app/shared/models/todo.model';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-todo-single',
  templateUrl: './todo-single.component.html',
  styleUrls: ['./todo-single.component.scss']
})
export class TodoSingleComponent implements OnInit {

  todo: Todo;
  readonly Priority = Priority;

  constructor(
    private route: ActivatedRoute,
    private data: DataService
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.data.getTodoById(id).subscribe((res) => {
      console.log(res);
      this.todo = res;
    })
  }

}
