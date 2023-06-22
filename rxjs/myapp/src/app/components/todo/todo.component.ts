import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from 'src/app/services/todo/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  public todos?: Todo[]
  constructor(private _todoService: TodoService) {}
  randomId: string = Math.floor(Math.random() * 30000).toString()

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._todoService.getTodos().subscribe({
      next: (value) => {
        this.todos = value as Todo[]
      }
    })
  }

  addTodo(todo: Todo) {
    this.todos?.push(todo)
  }
}
