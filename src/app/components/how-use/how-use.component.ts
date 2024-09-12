import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-use',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-use.component.html',
  styleUrl: './how-use.component.scss'
})
export class HowUseComponent {
  howToUse:any=[
    {
      title:'Sign up for a new account'
    },
    {
      title:'Log in to your personalized dashboard'
    },
    {
      title:'Add your income, expenses, and subscriptions'
    },
    {
      title:'Use the intuitive interface to manage your finances seamlessly'
    },
    
  ]
}
