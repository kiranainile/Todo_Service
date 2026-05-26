import { Injectable } from '@angular/core';
import { Ires, Itodo, ITodoRes } from '../models/todo';
import { Observable, of } from 'rxjs';

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
  constructor() { }


  fetchTodo():Observable<Itodo[]>{
      return of(this.todoArr);
  }

  AddTodo(todo:Itodo):Observable<ITodoRes>{
    this.todoArr.push(todo);
    return of({
      msg:'todo Item is Added Succesfully !!!',
      data:todo
    })
  }
}
