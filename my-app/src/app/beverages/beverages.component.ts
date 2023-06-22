import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../models/Todo';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.scss']
})
export class BeveragesComponent {
  constructor() {}

  @Input() beverage?: string = 'tea'
  @Output() newBeverageEvent = new EventEmitter<string>()
  @Output() addTodoEvent = new EventEmitter<string>()

  addNewBeverage(value: string) {
    this.newBeverageEvent.emit(value)
  }

  addNewTodo(value: string) {
    this.addTodoEvent.emit(value)
  }
}
