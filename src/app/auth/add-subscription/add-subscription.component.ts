import { Component } from '@angular/core';
import { SubscriptionListComponent } from "../subscription-list/subscription-list.component";
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-subscription',
  standalone: true,
  imports: [SubscriptionListComponent, CommonModule,ReactiveFormsModule],
  templateUrl: './add-subscription.component.html',
  styleUrl: './add-subscription.component.scss'
})
export class AddSubscriptionComponent {
  uniqueId:string = uuidv4();
  categoryList:any[]=[]
  subscriptionForm!:FormGroup;
  constructor(private authService:AuthService, private fb:FormBuilder){}

  ngOnInit():void{
    this.getList();
    this.subscriptionFormInitialization();
  }

  getList(){
   this.categoryList= this.authService.getCategoryList()
   console.log(this.categoryList);
  }

  subscriptionFormInitialization(){
    this.subscriptionForm=this.fb.group({
      name:[''],
      amount:[''],
      frequency:[''],
      category:[''],
      nextDueDate:[''],
      _id:[this.uniqueId]
    })
  }

  addSubscription(){
    this.subscriptionForm.patchValue({
      _id:uuidv4(),
    })
    this.authService.addSubscription(this.subscriptionForm.value);
    console.log(this.subscriptionForm.value);
    this.subscriptionForm.reset(
     {
      name:'',
      amount:'',
      frequency:'',
      category:'',
      nextDueDate:'',
      _id:uuidv4(),
     }
    );
  }
}
