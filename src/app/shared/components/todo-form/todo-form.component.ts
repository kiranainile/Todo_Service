import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';
import { Snackbarservice } from '../../service/snackbar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{

  EditObj!:Itodo
  @ViewChild('todo')todo!:NgForm;

  isIneditMode:boolean=false;
  
  constructor(private _todoService:TodoService,
    private _snackbar:Snackbarservice
  ){

  }
  ngOnInit(): void {
   this.OnEdit();
  }

  TodoAdd(){
      if(this.todo.valid){
        let newObj:Itodo={ 
      ...this.todo.value,
      todoid:Date.now().toString()
    }
    this.todo.reset();
    this._todoService.AddTodo(newObj).subscribe({
      next:data=>{
        this._snackbar.openSnackbar(data.msg);
      },
      error:err=>{
        this._snackbar.openSnackbar(err.msg);
      }
    })
    }
    }

  OnEdit(){
    this._todoService.EditObjSub$.subscribe({
      next:data=>{
        this.isIneditMode=true;
        this.EditObj=data;
        this.todo.form.patchValue(data);
      }
    })
  }
  
  onUpdate(){
    if(this.todo.valid){
    let Updated_obj:Itodo={
      ...this.todo.value,
      todoid:this.EditObj.todoid
    }
    this.isIneditMode=false;
    this.todo.reset();
    this._todoService.onupdate(Updated_obj).subscribe({
      next:data=>{
        this._snackbar.openSnackbar(data.msg)
      },
      error:err=>{
        this._snackbar.openSnackbar(err.msg)
      }
    })
  }
  }

  }


