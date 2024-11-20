import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as ItemActions from './item.actions';
import { ItemService } from './item.service';

@Injectable()
export class ItemEffects {
    constructor(private actions$: Actions, private itemService: ItemService) { }

    loadItems$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ItemActions.loadItems),
            mergeMap(() =>
                this.itemService.getItems().pipe(
                    map((items) => ItemActions.loadItemsSuccess({ items })),
                    catchError((error) => of(ItemActions.loadItemsFailure({ error: error.message })))
                )
            )
        )
    );

    addItem$ = createEffect(() =>
        this.actions$.pipe(
            ofType(ItemActions.addItem),
            mergeMap((action) =>
                this.itemService.addItem(action.item).pipe(
                    map((item) => ItemActions.addItemSuccess({ item })),
                    catchError((error) => of(ItemActions.addItemFailure({ error: error.message })))
                )
            )
        )
    );
}
