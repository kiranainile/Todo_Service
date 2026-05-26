import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
    providedIn:'root'
})

export class Snackbarservice{
constructor(private _snckabr:MatSnackBar){

}
openSnackbar(msg:string){
    this._snckabr.open(msg,'close',{
        horizontalPosition:'left',
        verticalPosition:'top',
        duration:2500
    })
}

}