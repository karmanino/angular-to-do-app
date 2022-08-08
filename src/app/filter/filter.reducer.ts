import { Action, createReducer, on } from '@ngrx/store';
import { AllowedFilters, setFilter } from './filter.actions';

export const initialState: AllowedFilters = 'all';

export const filterReducer = createReducer<AllowedFilters, Action>(
  initialState,
  on(setFilter, (state, { filterType }) => filterType)
);
