import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  myEmail:string="apchaudhary8126@gmail.com"

  contactForm!:FormGroup;

  constructor(private fb:FormBuilder){}

  ngOnInit(){
    this.contactFormInitialization()
  }

  contactFormInitialization(){
    this.contactForm=this.fb.group({
      name:[''],
      email:[''],
      phone:[''],
      message:[''],
      condition:['false']
    })
  }

  onSubmit(){
    console.log(this.contactForm.value);
    
  }
}
