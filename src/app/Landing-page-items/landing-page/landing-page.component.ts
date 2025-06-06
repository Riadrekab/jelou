import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarLandingComponent } from '../navbar-landing/navbar-landing.component';
import { SearchLandingComponent } from '../search-landing/search-landing.component';
import { MainFeedItemsComponent } from '../main-feed-items/main-feed-items.component';


@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarLandingComponent,SearchLandingComponent,MainFeedItemsComponent],
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
