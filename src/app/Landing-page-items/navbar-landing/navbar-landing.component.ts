import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-landing',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './navbar-landing.component.html',
  styleUrl: './navbar-landing.component.css'
})
export class NavbarLandingComponent {




  showIframe: boolean = false;
  firstName = '';
  lastName = '';
  email = '';
  phone = '';

  constructor(private router: Router){}

  openLink(link : string) {
    this.router.navigate([link]);
  }
  closeIframe() {
    this.showIframe = false;
  }
}
