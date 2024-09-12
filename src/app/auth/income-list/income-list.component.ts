import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-list.component.html',
  styleUrl: './income-list.component.scss'
})
export class IncomeListComponent {
  incomeList:any[]=[]
  constructor(private authService:AuthService){}

  ngOnInit():void{
    this.getList()
  }

  getList(){
   this.incomeList= this.authService.getIncomeList()
   console.log(this.incomeList);
  }
}
