import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { AllowedFilters, setFilter } from 'src/app/filter/filter.actions';
import { removeCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  activeFilter: AllowedFilters = 'all';
  filters: AllowedFilters[] = ['all', 'completed', 'pending'];
  pending: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state) => {
      this.activeFilter = state.filter;
      this.pending = state.todos.filter(todo => !todo.completed).length;
    });
  }

  setFilter(filter: AllowedFilters) {
    this.activeFilter = filter;
    this.store.dispatch(setFilter({ filterType: filter }));
  }
  
  removeCompleted(){
    this.store.dispatch(removeCompleted());
  }
}
