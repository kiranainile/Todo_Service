import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-getconfirm',
  templateUrl: './getconfirm.component.html',
  styleUrls: ['./getconfirm.component.scss']
})
export class GetconfirmComponent {

  getmsg!:string
constructor(private _matDialogRef:MatDialogRef<GetconfirmComponent>,
  @Inject(MAT_DIALOG_DATA)msg:string
){
  this.getmsg=msg;
}
  Onclick(flag:boolean){
    this._matDialogRef.close(flag)
  }

}
