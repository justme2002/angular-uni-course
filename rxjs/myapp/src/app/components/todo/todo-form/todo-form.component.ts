import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {

  }

  todoForm?: any

  @Output() addTodoEvent = new EventEmitter<string>()

  ngOnInit(): void {
    this.todoForm = this._formBuilder.group({
      title: ["", [Validators.required]]
    })
  }

  addTodo(value: string) {
    this.addTodoEvent.emit(value)
  }

  get title() {
    return this.todoForm?.get("title")
  }

  onSubmit() {
    this.addTodo(this.todoForm.value?.title)
  }
}
