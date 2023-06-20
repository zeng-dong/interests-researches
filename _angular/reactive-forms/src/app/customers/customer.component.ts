import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { Customer } from './customer';
import { Subject, throwError } from 'rxjs';
import {
  catchError,
  exhaustMap,
  groupBy,
  mergeMap,
  take,
} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  customer = new Customer();
  customerForm!: FormGroup;
  clickMessage = 'wait for click';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: '',
      notification: 'email',
      sendCatalog: true,
    });

    this.buttonClicked
      .pipe(
        groupBy((itemId) => itemId),
        mergeMap((groupedItemIds) =>
          groupedItemIds.pipe(
            exhaustMap((itemId) => {
              //The actual action that
              //should be performed on click
              return itemId + '__' + itemId;
            }),
            take(1),
            catchError((error) => throwError(error))
          )
        )
      )
      .subscribe((itemId) => {
        this.clickMessage = itemId + '+++' + itemId;
      });
  }

  save(customerForm: NgForm): void {
    console.log(customerForm.form);
    console.log('Saved: ' + JSON.stringify(customerForm.value));
  }

  saveReactive(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm));
  }

  populate(): void {
    this.customerForm.setValue({
      firstName: 'Michael',
      lastName: 'Zeng',
      email: 'mz@net.net',
      sendCatalog: false,
    });
  }

  setNotfication(notifyVia: string): void {
    const phoneControl = this.customerForm.get('phone');
    if (notifyVia === 'text') {
      phoneControl?.setValidators(Validators.required);
    } else {
      phoneControl?.clearValidators();
    }

    phoneControl?.updateValueAndValidity();
  }

  private buttonClicked = new Subject<string>();

  public singleDouble(itemId: string) {
    this.buttonClicked.next(itemId);
  }
}
