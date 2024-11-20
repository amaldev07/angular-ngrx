import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ItemActions from './item.actions';
import { ItemService } from './item.service';

@Injectable()
export class ItemEffects {
    constructor(private actions$: Actions, private itemService: ItemService) { }

    loadItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ItemActions.loadItems),
            mergeMap(() => {
                console.log('LoadItems action received');
                return this.itemService.getItems().pipe(
                    map((items) => {
                        console.log('Items loaded successfully:', items);
                        return ItemActions.loadItemsSuccess({ items });
                    }),
                    catchError((error) => {
                        console.error('Error loading items:', error);
                        return of(ItemActions.loadItemsFailure({ error: error.message }));
                    })
                );
            })
        )
    );


    // addItem$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(ItemActions.addItem), // Listens for the addItem action
    //         mergeMap((action) =>
    //             this.itemService.addItem(action.item).pipe( // Calls addItem from ItemService
    //                 map((item) => ItemActions.addItemSuccess({ item })), // Dispatches addItemSuccess
    //                 catchError((error) =>
    //                     of(ItemActions.addItemFailure({ error: error.message }))
    //                 )
    //             )
    //         )
    //     )
    // );
}
