import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
      
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      mail: ["", [Validators.email, Validators.required]],
      summary: ["", [Validators.required]],
      message: ["", [Validators.required]],
    })
  }

  onSubmit() {
    this.openSnackBar("Thank you for your message", "X")
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    })
  }

}
