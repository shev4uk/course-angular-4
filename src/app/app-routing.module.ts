import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [{
    path: 'todo', loadChildren: () => import('./todo-list/todo-list.module').then(m => m.TodoListModule)
  },
  {
    path: 'todo/add', loadChildren: () => import('./todo-add/todo-add.module').then(m => m.TodoAddModule)
  },
  {
    path: 'todo/edit/:id', loadChildren: () => import('./todo-edit/todo-edit.module').then(m => m.TodoEditModule)
  },
  {
    path: 'todo/:id', loadChildren: () => import('./todo-single/todo-single.module').then(m => m.TodoSingleModule)
  },
  {
    path: '', redirectTo: 'todo', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRountingModule {}