import { inject } from '@angular/core';
import { ProductsService } from '../products.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductsApiActions, productsPageOpened } from './products.actions';
import { catchError, concatMap, map, of } from 'rxjs';


export const loadProducts$ = createEffect(
    (action$ = inject(Actions), productsService = inject(ProductsService)) => {
        return action$.pipe(
            ofType(productsPageOpened),
            concatMap(() =>
                productsService.getProducts().pipe(
                    map((products) => ProductsApiActions.productsFetchedSuccess({ products })),
                    catchError((error) =>
                        of(ProductsApiActions.productsFetchedFailure({ error: error.message }))
                    )
                )
            )
        );
    },
    { functional: true }
);
