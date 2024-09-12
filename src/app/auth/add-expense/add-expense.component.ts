import { Component } from '@angular/core';
import { ExpenseListComponent } from "../expense-list/expense-list.component";
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [ExpenseListComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.scss'
})
export class AddExpenseComponent {
  uniqueId:string = uuidv4();
  categoryList:any[]=[]
  expenseForm!:FormGroup;
  constructor(private authService:AuthService, private fb:FormBuilder){}

  ngOnInit():void{
    this.getList();
    this.expenseFormInitialization();
  }

  getList(){
   this.categoryList= this.authService.getCategoryList()
   console.log(this.categoryList);
  }

  expenseFormInitialization(){
    this.expenseForm=this.fb.group({
      title:[''],
      amount:[''],
      category:[''],
      description:[''],
      _id:[this.uniqueId]
    })
  }

  addExpense(){
    this.expenseForm.patchValue({
      _id:uuidv4()
    })
    this.authService.addExpenseData(this.expenseForm.value);
    console.log(this.expenseForm.value);
    this.expenseForm.reset({
      title:'',
      amount:'',
      category:'',
      description:'',
      _id:uuidv4()
    });
  }

}
