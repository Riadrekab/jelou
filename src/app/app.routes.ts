import { Routes,RouterModule } from '@angular/router';

import { LandingPageComponent } from './Landing-page-items/landing-page/landing-page.component';
import { NavbarComponent } from './pro-form-items/navbar/navbar.component';
import { UsersFormPageComponent } from './pro-form-items/users-form-page/users-form-page.component';

export const routes: Routes = [

  { path: '', component: LandingPageComponent },
  { path: 'pro-form', component: UsersFormPageComponent },

];
