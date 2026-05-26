import { Injectable } from '@angular/core';
import { Itodo, ItodoRes } from '../models/todo';
import { Observable, of, Subject } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoArr:Array<Itodo>=[
    {
    todoItem:'js',
    todoid:'123',
    },
     {
      todoItem : 'ts',
      todoid: '124',
    },
     {
      todoItem : 'Angular',
      todoid: '125',
    },

  ]
  editTodoSub$  : Subject<Itodo>=new Subject<Itodo>()

  constructor(private_http: HttpClientModule) { }




  fetchTodo():Observable<Itodo[]>{
      return of(this.todoArr);
  }
  removeTodo(id:string):Observable<ItodoRes> {
//api call to remove Todo
let GET_INDEX =this.todoArr.findIndex(t =>t.todoid == id)
 let REMOVED_TODO  = this.todoArr.splice(GET_INDEX, 1)
  return of({
  msg : `The todo item with id ${REMOVED_TODO[0].todoid} is removed successfully !!!!`,
  data : REMOVED_TODO[0]
})
}
}
