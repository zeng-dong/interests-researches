import { Component } from '@angular/core';

@Component({
  selector: 'acct-address-selector',
  imports: [],
  templateUrl: './address-selector.html',
  styleUrl: './address-selector.css'
})
export class AddressSelector {
  addresses = [
    {
      id: 'a1df3ebc',
      name: 'Home',
      address: '123 Happiness way',
      city: "Somewhere",
      state: "Mezona",
      postalCode: "ABC-123"
    },
    {
      id: 'd4a37a4e',
      name: 'Work',
      address: '456 Main St',
      city: "Somewhere",
      state: "Colohoma",
      postalCode: "XYZ-465"
    }
  ]
}
