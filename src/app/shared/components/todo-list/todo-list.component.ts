import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';
import { Snackbarservice } from '../../service/snackbar';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetconfirmComponent } from '../getconfirm/getconfirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
TodoArr:Array<Itodo>=[]
  constructor(private _todoService:TodoService,
private _snackabr:Snackbarservice,
private _dialog:MatDialog){

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

  Onremove(id:string){
    let config=new MatDialogConfig();
    config.width='450px';
    config.disableClose=true;
    config.data='Are You Sure?You Want to remove it !!!'
   let confirm=this._dialog.open(GetconfirmComponent,config);
   confirm.afterClosed().subscribe({
    next:data=>{
      if(data){
        this._todoService.Onremove(data).subscribe({
          next:data=>{
            this._snackabr.openSnackbar(data.msg);
          },
          error:err=>{
            this._snackabr.openSnackbar(err.msg);
          }
        })
      }
    }
   })
  }

 OnEdit(todo:Itodo){
  this._todoService.EditObjSub$.next(todo);
 }
}
