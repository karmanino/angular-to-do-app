import { createAction, props } from '@ngrx/store';

export type AllowedFilters = 'all' | 'completed' | 'pending';

export const setFilter = createAction(
  '[Filter] Set filter',
  props<{ filterType: AllowedFilters }>()
);
