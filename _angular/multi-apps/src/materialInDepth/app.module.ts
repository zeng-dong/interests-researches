import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import {
    provideHttpClient,
    withInterceptorsFromDi,
} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material-module';

@NgModule({
    declarations: [AppComponent, HomeComponent, AboutComponent],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        MaterialModule,
        ReactiveFormsModule,
    ],
    providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule {}
