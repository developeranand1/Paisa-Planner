import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription-list.component.html',
  styleUrl: './subscription-list.component.scss'
})
export class SubscriptionListComponent {
  subscriptionList:any[]=[]
  constructor(private authService:AuthService){}

  ngOnInit():void{
    this.getList()
  }

  getList(){
   this.subscriptionList= this.authService.subscriptionList()
   console.log(this.subscriptionList);
  }
}
