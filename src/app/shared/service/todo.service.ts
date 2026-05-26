import { Injectable } from '@angular/core';
import { Itodo, ITodoRes } from '../models/todo';
import { Observable, of, Subject } from 'rxjs';

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

  editTodoSub$ : Subject<Itodo> = new Subject<Itodo>()
  constructor() { }


  fetchTodo():Observable<Itodo[]>{
      return of(this.todoArr);
  }
  

  updateTodo(updatedTodo : Itodo): Observable<ITodoRes>{
    let GET_INDEX = this.todoArr.findIndex(t => t.todoid === updatedTodo.todoid)
    this.todoArr[GET_INDEX] = updatedTodo

    return of({
      msg : `The todo item with id ${updatedTodo.todoid} is updated successfully !!!`,
      data : updatedTodo
    })
  }
}
