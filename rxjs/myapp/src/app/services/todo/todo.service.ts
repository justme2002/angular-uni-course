import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  getTodos(): Observable<object> {
    const todos$: Observable<object> = this.httpClient.get("https://jsonplaceholder.typicode.com/todos");
    return todos$;
  }
}
