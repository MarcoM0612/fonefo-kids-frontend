import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { User } from './pages/private/user/user';
import { Tips } from './pages/private/tips/tips';
import { tipNewForm } from './pages/private/tips/new-form/new-form';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register},
    { path: 'dashboard', component: Dashboard, canActivate: [ authGuard ] },
    { path: 'admin/user', component: User, canActivate: [ authGuard ] },
    { path: 'admin/tips', component: Tips, canActivate: [ authGuard ]},
    { path: 'admin/tips/new-form', component: tipNewForm, canActivate: [ authGuard ] },
    { path: '**',redirectTo: 'home', pathMatch: 'full'},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    
];
