import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }
  
  rootURL = '/api/';

  sendMail(mail) {
    return this.http.post(this.rootURL + 'mail', mail)
  }
}
