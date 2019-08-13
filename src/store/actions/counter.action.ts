import { createAction } from '@ngrx/store';

export enum StoreActions {
  increment = '[Counter] Increment',
  decrement = '[Counter] Decrement',
  reset = '[Counter] Reset'
}

export const increment = createAction(StoreActions.increment);
export const decrement = createAction(StoreActions.decrement);
export const reset = createAction(StoreActions.reset);