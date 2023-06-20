import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CustomerComponent } from './customers/customer.component';
import { MessageService } from './hero/message.service';
import { HeroService } from './hero/hero.service';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroComponent } from './hero/hero.component';
import { StrengthPipe } from './strength/strength.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: AppComponent },
  { path: 'customer', component: CustomerComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroComponent },
  { path: 'heroes', component: HeroesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    HeroesComponent,
    HeroComponent,
    StrengthPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [HeroService, MessageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
