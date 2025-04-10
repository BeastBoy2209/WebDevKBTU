import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';

const updatedConfig = {
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient()
  ]
};

bootstrapApplication(AppComponent, updatedConfig)
  .catch((err) => console.error(err));
