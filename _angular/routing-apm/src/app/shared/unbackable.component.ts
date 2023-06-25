import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  template: ` <p>base works!</p> `,
})
export class UnbackableComponent implements OnInit {
  constructor(private location: LocationStrategy) {}

  ngOnInit(): void {
    this.preventBackButton();
  }

  preventBackButton() {
    history.pushState(null, String(null), location.href);
    this.location.onPopState(() => {
      console.log('Back button pressed: UnbackableComponent');
      history.pushState(null, String(null), location.href);
    });
  }
}
