import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent {
  
msg !: string
  constructor(private _matDialogRef : MatDialogRef<GetConfirmComponent>,
    @Inject(MAT_DIALOG_DATA)data : string) { 
    // this.msg=data
  }

  ngOnInit(): void {
  }
onClose(flag:boolean){
  this._matDialogRef .close(flag)
  // this._matDialogRef.close()
}
}
