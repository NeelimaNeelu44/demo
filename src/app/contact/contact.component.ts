import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact = { name: '', email: '', message: '' };
  to_name:string = 'Neelima Manyam'
  private modal: any;
  @ViewChild('contactForm') contactForm!: NgForm;


  constructor() { }

  ngOnInit(): void {
  }
 
  

  onSubmit() {

    if (!this.validateEmail(this.contact.email)) {
      alert("Please enter a valid email address!");
      return;
    }
   
    
    emailjs.init('9zC9WJdwJePMgn6Op');
    emailjs.send("service_b8hyr5k","template_8bw4u4f",{
      from_name: this.contact.name,
      to_name: this.to_name,
      message: this.contact.message,
      from_email: this.contact.email
      });

      const modal = document.getElementById('successModal');
      if (modal) {
        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();
      }
      //this.contact = { name: '', email: '', message: '' };
      if (this.contactForm?.valid) {
        console.log('Form submitted:', this.contact);
        
        // Reset the form after submission
        this.contactForm.resetForm();
      }

    
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
 
  

}
