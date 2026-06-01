import { Injectable } from '@angular/core';
import { Ires, Itodo, ITodoRes } from '../models/todo';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  EditObjSub$:Subject<Itodo>=new Subject();
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

  Onremove(id:string):Observable<ITodoRes>{
    let getindex=this.todoArr.findIndex(t=>t.todoid===id);
   let removedItem= this.todoArr.splice(getindex,1);
   let res={
    msg:'the todoItemis remoevded succesfully',
    data:removedItem[0]
   }
   return of(res);
  }


  onupdate(todo:Itodo):Observable<ITodoRes>{
    let getindex=this.todoArr.findIndex(t=>t.todoid===todo.todoid);
    this.todoArr[getindex]=todo;
    let res={
      msg:'The todoItem is Updated Succesfully',
      data:todo
    }
    return of(res)
  }

}
