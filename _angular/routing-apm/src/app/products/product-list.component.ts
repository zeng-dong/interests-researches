import { Component, HostListener, OnInit } from '@angular/core';

import { Product } from './product';
import { ProductService } from './product.service';
import { LocationStrategy } from '@angular/common';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';

  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.products;
  }

  filteredProducts: Product[] = [];
  products: Product[] = [];

  constructor(
    private productService: ProductService,
    private location: LocationStrategy
  ) {}

  @HostListener('window:beforeunload', ['$event']) unloadHandler(event: Event) {
    event.returnValue = false;
  }

  ngOnInit(): void {
    this.preventBackButton();

    window.addEventListener('beforeunload', (event: BeforeUnloadEvent) => {
      event.preventDefault(); // for Firefox
      event.returnValue = ''; // for Chrome
      return '';
    });

    // window.addEventListener('keyup', (e: any) => {
    //   console.log('keyup detected');
    //   if ((e.which || e.keyCode) == 116) e.preventDefault();
    // });
    // window.addEventListener('keydown', (e: any) => {
    //   console.log('keydown detected');
    //   if ((e.which || e.keyCode) == 116) e.preventDefault();
    // });

    // window.addEventListener('beforeunload', function (e) {
    //   // var confirmationMessage = 'o/';
    //   // console.log('cond');
    //   // e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
    //   // return confirmationMessage; // Gecko, WebKit, Chrome <34

    //   e.preventDefault();
    // });

    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.filteredProducts = this.performFilter(this.listFilter);
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: Product) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  preventBackButton() {
    history.pushState(null, String(null), location.href);
    this.location.onPopState(() => {
      console.log('Back button pressed');
      history.pushState(null, String(null), location.href);
    });
  }
}
