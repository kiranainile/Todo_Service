import { Component, OnInit, ViewChild } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { Snackbarservice } from '../../service/snackbar';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit{
  isInEditMode : boolean = false
  editTodo !:Itodo
  @ViewChild('todoForm') todoForm!: NgForm

  
   constructor(
    private _todoService:TodoService,
    private _snackBar : Snackbarservice){
  }

  ngOnInit(): void {
       this.onTodoPatch()
       this.onUpdate()
  }




onTodoPatch (){
  this._todoService.editTodoSub$.subscribe({
      next : data => {
       this.editTodo = data
        this.isInEditMode = true;
        this.todoForm.form.patchValue(data)
      }
    })
}

onUpdate(){
if (this.todoForm.valid) {
  let UPDATED_OBJ: Itodo = {
    ...this.todoForm.value,
    todoid: this.editTodo.todoid
  }
  console.log(UPDATED_OBJ)

  this._todoService.updateTodo(UPDATED_OBJ)
  .subscribe({
    next : res => {
      this._snackBar.openSnackbar(res.msg)
      this.todoForm.reset();
      this.isInEditMode = false;
    },
    error : err => {
      this._snackBar.openSnackbar(err)
    }
  })
}
}
}
