import { createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const selectUserState = (state: any) => state.userState;

export const selectUsers = createSelector(selectUserState, (state: UserState) => state.users);
export const selectLoading = createSelector(selectUserState, (state: UserState) => state.loading);
export const selectError = createSelector(selectUserState, (state: UserState) => state.error);
