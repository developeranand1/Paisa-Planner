import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { filter } from 'rxjs';
import { HeaderComponent } from './pages/header/header.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isCreateAccount: boolean = false;
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        switch (this.router.url) {
          case '/create-account':
            this.isCreateAccount = this.router.url === '/create-account';
            break;
          case '/user/dashboard':
            this.isCreateAccount = this.router.url === '/user/dashboard';
            break;
          case '/user/add-expense':
            this.isCreateAccount = this.router.url === '/user/add-expense';
            break;
          case '/user/add-income':
            this.isCreateAccount = this.router.url === '/user/add-income';
            break;
          case '/user/add-subscription':
            this.isCreateAccount = this.router.url === '/user/add-subscription';
            break;
          case '/user/add-category':
            this.isCreateAccount = this.router.url === '/user/add-category';
            break;
          case '/user/settings':
            this.isCreateAccount = this.router.url === '/user/settings';
            break;
          default:
            this.isCreateAccount = false;
            break;
        }
      });
  }
}
