import { Component, inject } from '@angular/core';
import { AddressSelector } from "../../account/address-selector/address-selector";
import { CartService } from '../cart.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-checkout',
  imports: [AddressSelector, CurrencyPipe],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css'
})
export class Checkout {
  protected cartService = inject(CartService);

}
