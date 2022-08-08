import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {

  allCompleted = false;

  constructor(private store: Store) { }

  ngOnInit(): void {
  }
  
  toggleAll(){
    this.allCompleted = !this.allCompleted;
    this.store.dispatch(toggleAll({setAllAs: this.allCompleted})); 
  }

}
