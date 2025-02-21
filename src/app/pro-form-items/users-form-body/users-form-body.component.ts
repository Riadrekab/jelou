import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-users-form-body',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './users-form-body.component.html',
  styleUrl: './users-form-body.component.css'
})


export class UsersFormBodyComponent {
  step = 1;
  email = '';
  firstName = '';
  lastName = '';
  isEmailSubmitted = false;

  nextStep() {
    this.isEmailSubmitted = true;
    setTimeout(() => {
      this.step = 2;
      this.isEmailSubmitted = false; // Reset the slide effect
    }, 500); // Match the duration of the sliding animation
  }

  submitForm() {
    // Handle form submission here
    console.log('Form submitted:', { email: this.email, firstName: this.firstName, lastName: this.lastName });
  }
}
