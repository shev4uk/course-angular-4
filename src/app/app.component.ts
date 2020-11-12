import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Yurii';

  number = 10;

  arrNumber = [10, 40, 49];

  products = [{
    name: 'Product 1',
    price: 20,
    isStock: true
  }, {
    name: 'Product 2',
    price: 30,
    isStock: true
  }, {
    name: 'Product 3',
    price: 10,
    isStock: false
  }, {
    name: 'Product 4',
    price: 27,
    isStock: true
  }];

  isOpenMenu = false;

  openDropdown() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  addProduct() {
    this.products.push({
      name: 'Product 5',
      price: 35,
      isStock: true
    });
  }
}
