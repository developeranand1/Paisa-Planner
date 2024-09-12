import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,RouterOutlet, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  isSidebarOpen:boolean=true;
  userName:string="";
  constructor(private authService:AuthService, private router:Router){}

  ngOnInit(){
    this.getUser();
  }

  onLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out from the application.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.authService.logout();
        Swal.fire(
          'Logged Out',
          'You have been successfully logged out.',
          'success'
        );
        this.router.navigate(['/']);
      }
    });
  }
  

  getUser(){
   const user= this.authService.getUser();
   this.userName=user.firstName;
  }

  toggleSidebar(){
    this.isSidebarOpen=!this.isSidebarOpen;
  }

  closeSidebar(){
    this.isSidebarOpen=false;
  }
}
