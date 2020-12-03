import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  formOrder: FormGroup;

  optionDelivery = ['Nova Post', 'Ua Post', 'Self pickup'];

  get form() {
    return this.formOrder.controls;
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formOrder = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      delivery: ['', Validators.required],
      comment: ['']
    });
  }

  createOrder() {
    console.log(this.formOrder.value);
  }

}
