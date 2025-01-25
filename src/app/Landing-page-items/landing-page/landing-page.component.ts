import { Component } from '@angular/core';
import { NavbarLandingPageComponent } from "../navbar-landing-page/navbar-landing-page.component";
import { BodyLandingPageComponent } from "../body-landing-page/body-landing-page.component";
import { CallToActionComponent } from "../call-to-action/call-to-action.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarLandingPageComponent, BodyLandingPageComponent, CallToActionComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
