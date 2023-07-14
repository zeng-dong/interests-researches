import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { MaterialModule } from './shared/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
  ],
  imports: [BrowserModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
