import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';
import { SideBarComponent } from './auth/side-bar/side-bar.component';
import { DashboardComponent } from './auth/dashboard/dashboard.component';
import { AddExpenseComponent } from './auth/add-expense/add-expense.component';
import { AddCategoryComponent } from './auth/add-category/add-category.component';
import { AddSubscriptionComponent } from './auth/add-subscription/add-subscription.component';
import { SettingsComponent } from './auth/settings/settings.component';
import { AddIncomeComponent } from './auth/add-income/add-income.component';
export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    { path: 'create-account', component: CreateAccountComponent },
    {
        path:"user", component:SideBarComponent, children:[
            {path:'dashboard', component:DashboardComponent},
            {path:"add-expense", component:AddExpenseComponent},
            {path:"add-category",component:AddCategoryComponent},
            {path:"add-subscription", component:AddSubscriptionComponent},
            {path:"settings", component:SettingsComponent},
            {path:"add-income", component:AddIncomeComponent}
        ]
    },
    { path: '**', redirectTo: '' } 
];
