import { createReducer, on } from '@ngrx/store';
import * as Actions from '../actions/counter.action';

export const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(Actions.increment, state => state + 1),
  on(Actions.decrement, state => state - 1),
  on(Actions.reset, state => 0),
);