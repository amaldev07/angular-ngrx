// src/app/state/items/item.state.ts

import { Item } from './item.model'; // Define the `Item` interface in `item.model.ts` or inline here

export interface ItemsState {
  items: Item[];      // The list of items
  loading: boolean;   // Tracks whether data is being loaded
  error: string | null; // Stores any error messages
}

// Initial state for the Items feature
export const initialItemsState: ItemsState = {
  items: [],
  loading: false,
  error: null,
};
