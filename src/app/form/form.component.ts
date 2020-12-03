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
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10)]],
      delivery: ['', Validators.required],
      comment: ['']
    });
    this.setDefaultValueForm();
  }

  setDefaultValueForm() {
    this.formOrder.patchValue({
      name: 'Bob',
      fullName: 'Bob Check',
      email: 'test@fdgd.dsf',
      phone: '382652574',
      delivery: 'Nova Post'
    });
    Object.values(this.formOrder.controls).forEach(control => {
      control.markAsDirty();
    });
  }

  createOrder() {
    console.log(this.formOrder.value);
  }

}
