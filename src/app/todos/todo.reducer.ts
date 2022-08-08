import { createReducer, on } from '@ngrx/store';
import { ToDo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: ToDo[] = [
  new ToDo('Buy some groceries'),
  new ToDo('Send birthday invitations via e-mail'),
  new ToDo('Pay electricity bill'),
];

export const todoReducer = createReducer(
  initialState,
  on(actions.create, (state, { text }) => [...state, new ToDo(text)]),
  on(actions.toggle, (state, { id }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return { ...todo };
      }
    })
  ),
  on(actions.edit, (state, { id, text }) =>
    state.map((todo) => {
      if (todo.id === id) {
        return { ...todo, text: text };
      } else {
        return { ...todo };
      }
    })
  ),
  on(actions.remove, (state, { id }) => state.filter((todo) => todo.id !== id)),
  on(actions.toggleAll, (state, { setAllAs }) =>
    state.map((todo: ToDo) => {
      return { ...todo, completed: setAllAs };
    })
  ),
  on(actions.removeCompleted, (state) => state.filter(todo => !todo.completed))
);
