import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MailService } from '../../services/mail.service'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private mailService: MailService) {
      
   }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      mail: ["", [Validators.email, Validators.required]],
      summary: ["", [Validators.required, Validators.maxLength(50)]],
      message: ["", [Validators.required, Validators.maxLength(3000)]],
    })
  }

  onSubmit() {
    this.mailService.sendMail(this.contactForm.value).subscribe(data => {
      this.openSnackBar('Message has been sent', "X")
    });
    
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
    })
  }

}
