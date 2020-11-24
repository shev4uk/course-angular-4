import { Component, ElementRef, ViewChild } from '@angular/core';
import { Menu } from './menu.model';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('test', {static: false}) test: ElementRef;
  @ViewChild(MenuComponent) menuComponent: MenuComponent;

  title: string = 'Hello';
  count: number = 0;
  isChecked = true;
  isDisabled = false;
  colorText: string;
  showMenu = false;
  name = '';
  number = 0;

  menus: Menu[] = [{
    name: 'Home',
    url: '/home'
  }, {
    name: 'About',
    url: '/about'
  }, {
    name: 'Contact',
    url: '/contact'
  }];

  changePage(event: string) {
    console.log(event);
  }

  ngOnInit() {
    setTimeout(() => {
      this.count = 4;
    }, 2000);
  }

  ngAfterViewInit() {
    console.log(this.menuComponent.position);
    this.test.nativeElement.style.color = 'red';
  }

  showSomeText(): string {
    return 'Some string';
  }

  changeColor(color: string) {
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
