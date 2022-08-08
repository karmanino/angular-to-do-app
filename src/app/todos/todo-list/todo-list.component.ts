import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AllowedFilters } from 'src/app/filter/filter.actions';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todos: ToDo[] = [];
  filter: AllowedFilters = 'all';

  constructor(private store: Store<AppState>) {
    this.store.subscribe((state) => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }

  ngOnInit(): void {}
}
