import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title: string = 'Hello';
  count: number = 0;
  isChecked = true;
  isDisabled = false;
  colorText: string;
  showMenu = false;
  name = '';
  number = 0;


  ngOnInit() {
    setTimeout(() => {
      this.count = 4;
    }, 2000);
  }

  showSomeText(): string {
    return 'Some string';
  }

  changeColor(color) {
    this.colorText = color;
  }

  toogleMenu() {
    this.showMenu = !this.showMenu;
  }

  sendData() {
    console.log(this.name);
  }

  increment() {
    this.number += 1;
  }
}
