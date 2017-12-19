import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-deleting',
  templateUrl: './confirm-deleting.component.html',
  styleUrls: ['./confirm-deleting.component.scss']
})
export class ConfirmDeletingComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmDeletingComponent>) { }

  ngOnInit() {
  }

  respond(bool: boolean) {
    this.dialogRef.close(bool);
    // return newCource;
  }
}
