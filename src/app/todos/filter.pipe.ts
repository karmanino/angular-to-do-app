import { Pipe, PipeTransform } from '@angular/core';
import { AllowedFilters } from '../filter/filter.actions';
import { ToDo } from './models/todo.model';

@Pipe({
  name: 'filterTodos',
})
export class FilterPipe implements PipeTransform {
  transform(value: ToDo[], filter: AllowedFilters): ToDo[] {
    switch (filter) {
      case 'pending':
        return value.filter((todo) => !todo.completed);
      case 'completed':
        return value.filter((todo) => todo.completed);
      default:
        return value;
    }
  }
}
