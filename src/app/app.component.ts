import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showForm = 'login';

  tabForm(typeForm: string) {
    console.log(typeForm);
    this.showForm = typeForm;
  }
}
