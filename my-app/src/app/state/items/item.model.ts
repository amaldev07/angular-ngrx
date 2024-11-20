export interface AppState {
    items: ItemsState;
}

export interface Item {
    id: number;         // Unique identifier for the item
    name: string;       // Name of the item
    // description: string; // Description of the item
    price?: number;     // Optional: Price of the item
}

export interface ItemsState {
    items: Item[];
    loading: boolean;
    error: string | null;
}
