import { Component, OnInit } from '@angular/core';
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


  constructor() { }

  ngOnInit(): void {
  }
 
  

  onSubmit() {
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
      this.contact = { name: '', email: '', message: '' };

    
  }

  // emailjs.send("service_b8hyr5k","template_8bw4u4f",{
  //   from_name: "Manyam",
  //   to_name: "Neelima",
  //   message: "Hello",
  //   from_email: "neelima@gmail.com",
  //   });

    // emailjs.send("service_b8hyr5k","template_8bw4u4f",{
    //   from_name: "Devil",
    //   to_name: "neelu",
    //   message: "heyy",
    //   from_email: "devil@gmail.com",
    //   });
//publick key :9zC9WJdwJePMgn6Op
}
