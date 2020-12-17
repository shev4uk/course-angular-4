import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

  @Input() text: string;
  @Output() clickButton = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.clickButton.emit(`click on button with text: ${this.text}`);
  }

}
