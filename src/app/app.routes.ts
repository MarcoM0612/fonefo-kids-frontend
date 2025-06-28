import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { User } from './pages/private/user/user';
import { Tips } from './pages/private/tips/tips';
import { tipNewForm } from './pages/private/tips/new-form/new-form';

export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register},
    { path: 'admin/user', component: User},
    { path: 'admin/tips', component: Tips},
    { path: 'admin/tips/new-form', component: tipNewForm },
    { path: '**',redirectTo: 'home', pathMatch: 'full'},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    
];
