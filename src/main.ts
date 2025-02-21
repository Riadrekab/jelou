import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';  // Assuming this is a configuration file
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
