import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  create(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  getUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }

  logout() {
    localStorage.removeItem('user');
  }


  // All Category Services
  addCategory(newCategory: any) {
    const existingDataString = localStorage.getItem('category');
    let categories = [];
    if (existingDataString) {
      categories = JSON.parse(existingDataString);
    }

    categories.push(newCategory);
    const updatedDataString=JSON.stringify(categories);
    localStorage.setItem('category',updatedDataString);
  }

  getCategoryList(){
    const data=localStorage.getItem('category')
    if(!data){
      return [];
    }
    const categoryList=JSON.parse(data);

    return Array.isArray(categoryList)?categoryList:[];
  }



  removeCategory(_id:string){
    const existingDataString=localStorage.getItem('category');
    if(!existingDataString){
      return;
    }
    let categories=JSON.parse(existingDataString);
    categories=categories.filter((category:any) => category._id !== _id);
    localStorage.setItem('category',JSON.stringify(categories));
    return
  }


  updateCategoryLocalStorage(updateData: any): void {
    const existingDataString = localStorage.getItem('category');
    
    // Check if there is existing data
    if (!existingDataString) {
      return;
    }
  
    // Parse the existing data into an array
    let categories = JSON.parse(existingDataString);
  
    // Update the specific category by matching the _id
    categories = categories.map((category: any) =>
      category._id === updateData._id ? updateData : category
    );
  
    // Store the updated categories array back into localStorage
    localStorage.setItem('category', JSON.stringify(categories));
  }
  
  


  // All Expense Services
  addExpenseData(data:any){
    const existingDataString=localStorage.getItem('expense');
    let expenses=[];

    if(existingDataString){
      expenses=JSON.parse(existingDataString);
    }
    expenses.push(data);

    const updateData=JSON.stringify(expenses);
    localStorage.setItem('expense',updateData)
  }

  getExpenseList(){
    const data=localStorage.getItem('expense');
    if(!data){
      return [];
    }
    const expenseList=JSON.parse(data);
    return Array.isArray(expenseList)?expenseList:[];
  }

    // All Income Services
    addIncomeData(data:any){
      const existingDataString=localStorage.getItem('income');
      let incomes=[];
  
      if(existingDataString){
        incomes=JSON.parse(existingDataString);
      }
      incomes.push(data);
  
      const updateData=JSON.stringify(incomes);
      localStorage.setItem('income',updateData)
    }
  
    getIncomeList(){
      const data=localStorage.getItem('income');
      if(!data){
        return [];
      }
      const incomeList=JSON.parse(data);
      return Array.isArray(incomeList)?incomeList:[];
    }

    // All Subscription Services
    addSubscription(data:any){
      const existingDataString=localStorage.getItem('subscription');
      let incomes=[];
  
      if(existingDataString){
        incomes=JSON.parse(existingDataString);
      }
      incomes.push(data);
  
      const updateData=JSON.stringify(incomes);
      localStorage.setItem('subscription',updateData)
    }
  
    subscriptionList(){
      const data=localStorage.getItem('subscription');
      if(!data){
        return [];
      }
      const incomeList=JSON.parse(data);
      return Array.isArray(incomeList)?incomeList:[];
    }
}
