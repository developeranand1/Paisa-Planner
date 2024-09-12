import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expense-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-list.component.html',
  styleUrl: './expense-list.component.scss'
})
export class ExpenseListComponent {
  expenseList:any[]=[]
  constructor(private authService:AuthService){}

  ngOnInit():void{
    this.getList()
  }

  getList(){
   this.expenseList= this.authService.getExpenseList()
   console.log(this.expenseList);
  }
}
