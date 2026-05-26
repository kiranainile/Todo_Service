import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';
import { Snackbarservice } from '../../service/snackbar';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
TodoArr:Array<Itodo>=[]
 
  constructor(private _todoService:TodoService,
private _snackabr:Snackbarservice,
 private _matDialog : MatDialog){

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

onRemove(id : string){
  let matConfig = new MatDialogConfig()
  matConfig.width ='350px';
  matConfig.disableClose = true;
  matConfig.data =`Are You sure, you want to remove todowith id ${id}`
  let matRef = this._matDialog.open (GetConfirmComponent, matConfig )
  matRef .afterClosed()
  .subscribe(res => {
if(res){

  this._todoService.removeTodo(id)
.subscribe({
  next : res =>{
    this._snackabr.openSnackbar(res.msg)
  },
  error : err =>{
    this._snackabr.openSnackbar(err.msg)
  }
})
}
  })
}
 
}
