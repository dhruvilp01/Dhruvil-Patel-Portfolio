import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { SnotifyService } from 'ng-snotify';
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  model: any = {};

  constructor(private http: HttpClient){}

  ngOnInit() {
     }
onSubmit(contactForm: NgForm) {
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      console.log("headers :", headers);
      console.log("email name email message :", email, email.name, email.email, email.message)
      this.http.post('https://formspree.io/f/mqkgodqj',
        { name: email.name, replyto: email.email, message: email.messages },
        { 'headers': headers }).subscribe(
          response => {
            alert("Your Message send to Dhruvil Patel, he will contact ASAP.")
            // console.log(response);
          }
        );
    }
  }

}
