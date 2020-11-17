import { Component, OnInit } from '@angular/core';

enum RoleBlog {
  Admin = 9,
  Editor = 2,
  Viewer = 1
}

type User = {
  name: string,
  age: number,
  phone?: string,
  role: RoleBlog
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  text: string;

  age = 25;

  counterText: unknown;

  level: number | string;

  arrNumber: number[] = [3, 5, 20];
  array: [number, string] = [10, 'ten'];

  _name: string;

  set name(value) {
    if (value.length > 5) {
      this._name = value.slice(0, 5);
    } else {
      this._name = value;
    }
  }

  get name() {
    return this._name;
  }

  // user1: User = {
  //   name: 'Bob',
  //   age: 34,
  //   phone: '2334532342'
  // }
  // user2: User = {
  //   name: 'Alice',
  //   age: 24
  // }

  users: User[];

  readonly RoleBlog = RoleBlog;

  ngOnInit() {
    this.name = 'Oleksandr';
    console.log(this.name);

    this.text = 'some string';

    this.age = 24;

    this.counterText = 20;
    this.counterText = 'test';

    this.level = 3;
    this.level = 'strong';

    console.log(RoleBlog.Admin, RoleBlog[9]);

    this.users = [{
      name: 'User1',
      age: 34,
      role: 9
    }, {
      name: 'User2',
      age: 30,
      role: 1
    }];

    console.log(this.diffDate(new Date(), new Date(2020, 9, 21)));

    console.log(this.calcPrice(100));
  }

  diffDate(date1: Date, date2: Date): number {
    const diff = +date1 - +date2;
    return Number((diff / 1000 / 60 / 60).toFixed(2));
  }

  calcPrice(price: number, sale: number = 20): number {
    return price - price * sale / 100;
  }

}
