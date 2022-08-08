import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ToDo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: ToDo;
  @ViewChild('editInput') editInput!: ElementRef;
  chkToggle!: FormControl;
  txtEdit!: FormControl;
  editing = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkToggle = new FormControl(this.todo.completed);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);

    this.chkToggle.valueChanges.subscribe((_) =>
      this.store.dispatch(actions.toggle({ id: this.todo.id }))
    );
  }

  enterEditMode() {
    this.editing = true;
    setTimeout(() => this.editInput.nativeElement.select(), 1);
    this.txtEdit.setValue(this.todo.text);
  }

  exitEditMode() {
    this.editing = false;
    if (this.txtEdit.invalid || !this.txtEdit.dirty) return;
    this.txtEdit.markAsPristine();
    this.store.dispatch(
      actions.edit({ id: this.todo.id, text: this.txtEdit.value })
    );
  }

  deleteToDo() {
    this.store.dispatch(actions.remove({ id: this.todo.id }));
  }
}
