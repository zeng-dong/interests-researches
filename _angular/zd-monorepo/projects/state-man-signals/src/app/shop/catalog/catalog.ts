import { Component, inject, Signal } from '@angular/core';
import { ProductDetails } from "../product-details/product-details";
import { ProductsService } from '../products.service';
import { IProduct } from '../product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetails],
  templateUrl: './catalog.html',
  styleUrl: './catalog.css'
})
export class Catalog {
  products!: Signal<IProduct[]>;
  private productsService = inject(ProductsService);
  private cartService = inject(CartService);

  ngOnInit() {
    this.products = this.productsService.products;
  }

  addToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
