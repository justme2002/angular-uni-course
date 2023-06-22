import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { BeveragesComponent } from './beverages/beverages.component';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title? = 'my-app';

  beverages = ['milk', 'tea', 'coffee', 'juice']

  randomId = Math.floor(Math.random() * 3000)

  todos: Todo[] = [
    {
      id: "1",
      title: "viec 1",
      completed: true
    },
    {
      id: "2",
      title: "viec 2",
      completed: false
    }
  ]

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @ViewChild(BeveragesComponent) beverageComponent?: BeveragesComponent;

  ngOnInit(): void {
    this.title = this.beverageComponent?.beverage
  }

  ngAfterViewInit(): void {
    this.title = this.beverageComponent?.beverage
    this.changeDetectorRef.detectChanges()
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.title = ''
  }

  addBeveage(newBeverage: string) {
    this.beverages.push(newBeverage)
  }

  addTodo(todo: Todo) {
    this.todos.push(todo)
  }
}
