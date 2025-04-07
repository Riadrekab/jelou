import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-users-form-body',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './users-form-body.component.html',
  styleUrl: './users-form-body.component.css'
})


export class UsersFormBodyComponent {

  constructor(private router: Router){}

  step = 1;
  email = '';
  firstName = '';
  lastName = '';
  phone ='';
  // step = 1;
  isLoading = false; // Controls the progress bar

  openLink(link : string) {
    this.router.navigate([link]);
  }

  nextStep() {
    this.isLoading = true; // Show progress bar

    setTimeout(() => {
      this.isLoading = false; // Hide progress bar
      this.step++; // Move to the next step
    }, 1000); // Delay of 1 second
  }

  submitForm() {
    alert("Form submitted!");
  }
}
