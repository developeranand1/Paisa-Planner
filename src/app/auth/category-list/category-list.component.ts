import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { v4 as uuidv4 } from 'uuid';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  categoryList:any[]=[];
  uniqueId:string = uuidv4();

  categoryForm!:FormGroup;
  typeList:any=[
    "Income",
    "Expense"
  ]
  constructor(private authService:AuthService,private fb:FormBuilder){}

  ngOnInit():void{
    this.getList();
    this.categoryFormInitialization();
  }

  categoryFormInitialization():void{
    this.categoryForm=this.fb.group({
      name:[''],
      type:[''],
      _id:[this.uniqueId]
    })
  }

  getList(){
   this.categoryList= this.authService.getCategoryList()
   console.log("",this.categoryList);
  }

  getCategoryData(data:any){
    this.categoryForm.patchValue({
      name:data.name,
      type:data.type,
      _id:data._id
    })
  }



  // onDelete(data:string){
  //   this.authService.removeCategory(data)
  //   this.getList();
  // }

  onDelete(data: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.removeCategory(data)
        Swal.fire(
          'Deleted!',
          'The category has been deleted.',
          'success'
        );
        this.getList();
      }
    });
  }
  

  onUpdate(){
  
    this.authService.updateCategoryLocalStorage(this.categoryForm.value);
    console.log(this.categoryForm.value);
    this.getList();
  }
}
