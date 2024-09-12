import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { NotificationComponent } from '../notification/notification.component';


@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [ReactiveFormsModule,NotificationComponent],
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  notificationMessage: string = '';
  notificationType: 'success' | 'error' = 'success'; 

  userForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
   
  ) {}

  ngOnInit(): void {
    this.userFormInitialization();
    this.getUser();
  }

  userFormInitialization(): void {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phone: ['']
    });
  }

  getUser(): void {
    const user = this.authService.getUser();
    console.log('Retrieved user:', user);

    if (user) {
      this.userForm.patchValue({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.email || '',
        phone: user.phone || ''
      });
    } else {
      // console.error('User data is not available.');

      this.showNotification('Error: User data is not available', 'error');    }
  }

  onUpdate(): void {
    this.authService.create(this.userForm.value);
    this.showNotification('User details updated successfully', 'success');
    
  }

  showNotification(message: string, type: 'success' | 'error'): void {
    this.notificationMessage = message;
    this.notificationType = type;

    
    setTimeout(() => {
      this.notificationMessage = '';
    }, 3000);
  }
  
}
