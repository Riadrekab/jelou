import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {
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
