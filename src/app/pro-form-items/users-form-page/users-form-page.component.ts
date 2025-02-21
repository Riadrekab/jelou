import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { UsersFormBodyComponent } from "../users-form-body/users-form-body.component";

@Component({
  selector: 'app-users-form-page',
  standalone: true,
  imports: [NavbarComponent, NavbarComponent, UsersFormBodyComponent],
  templateUrl: './users-form-page.component.html',
  styleUrl: './users-form-page.component.css'
})
export class UsersFormPageComponent {

}
