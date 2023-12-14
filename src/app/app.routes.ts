import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './guards/auth.guard';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'signin', component: SigninComponent, canActivate:[userGuard]},
    {path:'dashboard', component: DashboardComponent, canActivate:[authGuard]}
];
