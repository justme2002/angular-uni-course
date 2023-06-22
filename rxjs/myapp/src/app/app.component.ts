import { Component, OnInit } from '@angular/core';
import { Observable, filter, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'myapp';
  ngOnInit(): void {
    const observable = new Observable((subcriber) => {
      subcriber.next(1)
      subcriber.next(2)
      subcriber.next(3)
      setTimeout(() => {
        subcriber.next(4)
        subcriber.complete()
      }, 3000)
    })
    
    //deprecated
    const observableCreation = Observable.create()

    //of
    const array = [1,2,3,4,5,6,7]
    const observableWithNumberArray = of(array)
    const observableWithString = of("Hello", "Hi")
    const observableWithMixType = of(1, "Hello", [{"id": 1}])
    observableWithMixType.subscribe({
      next(value) {
        console.log(value)
      }
    })

    //from
    const todo = [
      {
        id: "1",
        title: "Viec 1",
        completed: true
      },
      {
        id: "2",
        title: "Viec 2",
        completed: false
      },
      {
        id: "3",
        title: "Viec 3",
        completed: false
      }
    ]

    //pipe
    const fromTodo = from(todo).pipe(
      map(todo => todo),
      filter(todo => todo.id == "2"),
      tap(todo => todo.completed = true),
    )
    fromTodo.subscribe({
      next(value) {
        console.log(value)
      },
    })
  }
}
