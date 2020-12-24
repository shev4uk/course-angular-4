import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoSingleRoutingModule } from './todo-single-routing.module';
import { TodoSingleComponent } from './todo-single/todo-single.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [TodoSingleComponent],
  imports: [
    CommonModule,
    TodoSingleRoutingModule,
    MatProgressBarModule,
    MatButtonModule
  ]
})
export class TodoSingleModule { }
