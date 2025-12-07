import { createAction, createActionGroup, props } from '@ngrx/store';
import { Product } from '../product.model';

export const productsPageOpened = createAction('[Products Page] Opened');

export const ProductsApiActions = createActionGroup({
    source: 'Products API',
    events: {
        productsFetchedSuccess: props<{ products: Product[] }>(),
        productsFetchedFailure: props<{ error: string }>(),
    },
});
