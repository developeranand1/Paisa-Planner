import { Component, EventEmitter, Output, output } from '@angular/core';
import { CategoryListComponent } from "../category-list/category-list.component";
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [CategoryListComponent,ReactiveFormsModule, CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {

  uniqueId:string = uuidv4();

  categoryForm!:FormGroup;

  typeList:any=[
    "Income",
    "Expense"
  ]

  constructor(private fb:FormBuilder, private authService:AuthService){}

  ngOnInit():void{
    this.categoryFormInitialization();
  }

  categoryFormInitialization():void{
    this.categoryForm=this.fb.group({
      name:[''],
      type:[''],
      _id:[this.uniqueId]
    })
  }


  // onAddCategory(){
  //   this.uniqueId=uuidv4();

  //   this.categoryForm.patchValue(
  //     {_id:uuidv4()}
  //   )
  //   console.log(this.categoryForm.value)
  //   this.authService.addCategory(this.categoryForm.value)
  //   this.categoryForm.reset({
  //     name:'',
  //     type:'',
  //     _id:uuidv4()
  //   });
  
  // }

  onAddCategory() {
    this.uniqueId = uuidv4();
  
    this.categoryForm.patchValue({
      _id: this.uniqueId
    });
  
    console.log(this.categoryForm.value);
  
    this.authService.addCategory(this.categoryForm.value)
      
      // Show success alert when the category is added successfully
      Swal.fire({
        title: 'Success!',
        text: 'Category has been added successfully.',
        icon: 'success',
        confirmButtonText: 'OK'
      });

      // Reset form with initial values
      this.categoryForm.reset({
        name: '',
        type: '',
        _id: uuidv4()
      });
  }
  
}
