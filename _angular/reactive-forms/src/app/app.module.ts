import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { MessageService } from './hero/message.service';
import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeroesComponent,
    HeroComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
