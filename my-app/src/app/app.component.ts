// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'my-app';
// }


import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadItems } from './state/items/item.actions';
import { Item, ItemsState  } from './state/items/item.model';

import * as ItemActions from './state/items/item.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  items$: Observable<Item[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(private store: Store<{ items: ItemsState }>) {
    this.items$ = this.store.select((state) => state.items.items);
    this.loading$ = this.store.select((state) => state.items.loading);
    this.error$ = this.store.select((state) => state.items.error);
  }

  ngOnInit(): void {
    debugger;
    this.store.dispatch(ItemActions.loadItems());
  }

  addItem() {
    const newItem = { id: Math.random(), name: 'New Item' };
    this.store.dispatch(ItemActions.addItem({ item: newItem }));
  }

  // deleteItem(id: number) {
  //   this.store.dispatch(ItemActions.deleteItem({ id }));
  // }
}

