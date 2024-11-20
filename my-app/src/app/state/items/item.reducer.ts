import { createReducer, on } from '@ngrx/store';
import * as ItemActions from './item.actions';
import { ItemsState } from './item.state';

export const initialState: ItemsState = {
    items: [],
    loading: false,
    error: null,
};

export const itemsReducer = createReducer(
    initialState,
    on(ItemActions.loadItems, (state) => ({ ...state, loading: true })),
    on(ItemActions.loadItemsSuccess, (state, { items }) => ({ ...state, items, loading: false })),
    on(ItemActions.loadItemsFailure, (state, { error }) => ({ ...state, loading: false, error })),
    on(ItemActions.addItemSuccess, (state, { item }) => ({ ...state, items: [...state.items, item] })),
    
   /*  on(ItemActions.deleteItemSuccess, (state, { itemId }) => ({
        ...state,
        items: state.items.filter(item => item.id !== itemId),
    })) */
);
