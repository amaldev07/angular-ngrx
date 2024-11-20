import { createAction, props } from '@ngrx/store';
import { Item } from './item.model';

export const loadItems = createAction('[Items] Load Items');
export const loadItemsSuccess = createAction('[Items] Load Items Success', props<{ items: Item[] }>());
export const loadItemsFailure = createAction('[Items] Load Items Failure', props<{ error: string }>());

// export const addItem = createAction('[Items] Add Item', props<{ item: Item }>());
// export const addItemSuccess = createAction('[Items] Add Item Success', props<{ item: Item }>());
// export const addItemFailure = createAction('[Items] Add Item Failure', props<{ error: string }>());
