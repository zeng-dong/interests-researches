//// bootstrap standalone component
// import { bootstrapApplication } from '@angular/platform-browser';

// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// import { appConfig } from './app3/app.config';
// import { AppComponent } from './app3/app.component';

// import { app2Config } from './appNumberTwo/app2.config';
// import { App2Component } from './appNumberTwo/app2.component';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

// bootstrapApplication(App2Component, app2Config).catch((err) =>
//   console.error(err)
// );

///////////////////////////////////
//// bootstrap standalone component: app module
////////////////////////////////////
/*
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);*/

///////////////////////////////////////
//// bootstrap module: material module
////////////////////////////////////////

//////import { appConfig } from './materialInDepth/app.config';             // do not need this
//import { AppModule } from './materialInDepth/app.module';
////////////import { AppComponent } from './materialInDepth/app.component';             // do not need this
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// platformBrowserDynamic()
//     .bootstrapModule(AppModule)
//     .catch((err) => console.log(err));

////////////////////////////////
//// quiz, standalone
////////////////////////////////
/*
import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './quizSignals/app.config';
import { AppComponent } from './quizSignals/app.component';

bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err)
);*/

///////////////////////////////////////
//// bootstrap module: routing playbook module
////////////////////////////////////////
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './routingPlaybook/app.module';
platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
