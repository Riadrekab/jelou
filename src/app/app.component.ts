import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarLandingPageComponent } from "./Landing-page-items/navbar-landing-page/navbar-landing-page.component";
import { BodyLandingPageComponent } from "./Landing-page-items/body-landing-page/body-landing-page.component";
import { CallToActionComponent } from "./Landing-page-items/call-to-action/call-to-action.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarLandingPageComponent, BodyLandingPageComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'manzili-landing-page';
}
