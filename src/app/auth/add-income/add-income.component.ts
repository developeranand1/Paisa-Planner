import { Component } from '@angular/core';
import { IncomeListComponent } from '../income-list/income-list.component';
import { FormGroup, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from '../notification/notification.component';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-income',
  standalone: true,
  imports: [
    IncomeListComponent,
    CommonModule,
    ReactiveFormsModule,
    NotificationComponent,
  ],
  templateUrl: './add-income.component.html',
  styleUrl: './add-income.component.scss',
})
export class AddIncomeComponent {
  uniqueId:string = uuidv4();
  categoryList: any[] = [];
  incomeForm!: FormGroup;
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getList();
    this.expenseFormInitialization();
  }

  getList() {
    this.categoryList = this.authService.getCategoryList();
    console.log(this.categoryList);
  }

  expenseFormInitialization() {
    this.incomeForm = this.fb.group({
      title: [''],
      amount: [''],
      category: [''],
      description: [''],
      _id:[this.uniqueId]
    });
  }

  addIncome() {
    this.incomeForm.patchValue({
      _id:uuidv4(),
    })
    this.authService.addIncomeData(this.incomeForm.value);
    this.getList() ;
    this.showNotification('Add income successfully', 'success');
    this.incomeForm.reset({
      _id:uuidv4(),
      title:'',
      amount:'',
      category: '',
      description:'',
    });
  }
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success';

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notificationMessage = message;
    this.notificationType = type;

    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }

  modalClose(): void {
    
    setTimeout(() => {
      this.notificationMessage = '';
    }, 1000);
  }
}
