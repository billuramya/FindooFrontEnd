import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent  {
  user = {
    userName: '',
    userEmail: '',
    userPassword: '',
    city: ''
  };
  submitted = false;

  submitForm() {
    this.submitted = true;
  }
}