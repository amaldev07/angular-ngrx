import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as UserActions from './user.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { UserService } from '../../user.service';

@Injectable()
export class UserEffects {
    constructor(private actions$: Actions, private userService: UserService) { }

    loadUsers$ = createEffect(() =>
        this.actions$.pipe(
            ofType(UserActions.loadUsers), // Listen for loadUsers action
            mergeMap(() =>
                this.userService.getUsers().pipe(
                    map(users => UserActions.loadUsersSuccess({ users })), // Dispatch success action
                    catchError(error =>
                        of(UserActions.loadUsersFailure({ error: error.message }))
                    )
                )
            )
        )
    );
}
