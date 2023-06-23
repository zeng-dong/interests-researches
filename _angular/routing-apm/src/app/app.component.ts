import { Component, OnInit } from '@angular/core';

import { AuthService } from './user/auth.service';
import { LocationStrategy } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
    private authService: AuthService,
    private location: LocationStrategy,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.preventBackButton();
  }

  logOut(): void {
    this.authService.logout();
    console.log('Log out');
    this.router.navigateByUrl('/welcome');
  }

  preventBackButton() {
    //history.pushState(null, String(null), location.href);
    this.location.onPopState(() => {
      console.log('Back button pressed');
      history.pushState(null, String(null), location.href);
    });
  }
}
