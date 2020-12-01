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

  name = '';

  userForm = {
    name: '',
    age: ''
  }

  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odit voluptatibus modi aspernatur voluptate tempore, iusto quaerat fugiat! Expedita eos dolores sed rem natus cumque aliquid esse eaque! Sequi, beatae.';

  users: User[] = [{
    name: 'Alice',
    age: 20
  }, {
    name: 'Bob',
    age: 32
  }, {
    name: 'John',
    age: 30
  }, {
    name: 'Barby',
    age: 15
  }];

  size = 3242.464575475;

  changeSort() {
    this.defaultSort = this.defaultSort === 'asc' ? 'desc' : 'asc';
  }

  addUser() {
    this.users.push(this.userForm);
    this.userForm = {
      name: '',
      age: ''
    }
  }
}
