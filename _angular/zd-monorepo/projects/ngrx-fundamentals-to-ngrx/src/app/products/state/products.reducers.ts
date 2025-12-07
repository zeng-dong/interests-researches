import { createReducer, on } from '@ngrx/store';
import { Product, ProductStatus } from '../product.model';
import { ProductsApiActions, productsPageOpened } from './products.actions';

export interface ProductsState {
    products: Product[];
    status: ProductStatus;
}

export const initialState: ProductsState = {
    products: [],
    status: { type: 'idle' },
};

export const productsReducer = createReducer(
    initialState,

    on(productsPageOpened, (state) => ({
        ...state,
        status: { type: 'loading' },
    })),

    on(ProductsApiActions.productsFetchedSuccess, (state, { products }) => ({
        ...state,
        products: products,
        status: { type: 'loaded' },
    })),

    on(ProductsApiActions.productsFetchedFailure, (state, { error }) => ({
        ...state,
        products: [],
        status: { type: 'error', message: error },
    }))
);
