import { Component } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  defaultSort = 'asc';
  
  nowDate = new Date();

  discount = 0.2;

  price = 100;

  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit voluptatibus modi aspernatur voluptate tempore, iusto quaerat fugiat! Expedita eos dolores sed rem natus cumque aliquid esse eaque! Sequi, beatae.';

  users: User[] = [{
    name: 'User 1',
    age: 20
  }, {
    name: 'User 2',
    age: 32
  }, {
    name: 'User 3',
    age: 30
  }, {
    name: 'User 4',
    age: 15
  }];

  size = 3242.464575475;

  changeSort() {
    this.defaultSort = this.defaultSort === 'asc' ? 'desc' : 'asc';
  }

}
