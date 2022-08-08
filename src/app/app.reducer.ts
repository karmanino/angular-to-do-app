import { ActionReducerMap } from "@ngrx/store";
import { AllowedFilters } from "./filter/filter.actions";
import { filterReducer } from "./filter/filter.reducer";
import { ToDo } from "./todos/models/todo.model";
import { todoReducer } from "./todos/todo.reducer";

export interface AppState {
    todos: ToDo[],
    filter: AllowedFilters
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
} 