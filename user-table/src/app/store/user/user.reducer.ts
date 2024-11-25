import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSuccess, loadUsersFailure } from './user.actions';
import { UserState, initialState } from './user.state';

export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  }))
);
