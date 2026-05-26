import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';
import { Snackbarservice } from '../../service/snackbar';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
TodoArr:Array<Itodo>=[]
  constructor(private _todoService:TodoService,
private _snackabr:Snackbarservice){

  }
  ngOnInit(): void {
    this._todoService.fetchTodo().subscribe({
      next:data=>{
        this.TodoArr=data;
      },
      error:err=>{
        console.log(err)
      }
    })
  }

  onTodoEdit(todo : Itodo){
    console.log(todo);
    this._todoService.editTodoSub$.next(todo)
  }
 
}
