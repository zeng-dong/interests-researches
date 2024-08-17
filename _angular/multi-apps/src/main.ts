import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { app2Config } from './appNumberTwo/app2.config';
import { App2Component } from './appNumberTwo/app2.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);

// bootstrapApplication(App2Component, app2Config).catch((err) =>
//   console.error(err)
// );
