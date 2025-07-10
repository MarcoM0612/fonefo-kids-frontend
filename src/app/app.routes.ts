import { Routes } from '@angular/router';
import { Home } from './pages/public/home/home';
import { Login } from './pages/public/login/login';
import { Register } from './pages/public/register/register';
import { User } from './pages/private/user/user';
import { Tips } from './pages/private/tips/tips';
import { tipNewForm } from './pages/private/tips/new-form/new-form';
import { Dashboard } from './pages/private/dashboard/dashboard';
import { authGuard } from './guards/auth-guard';
import { Catalogo } from './pages/public/catalogo/catalogo';
import { Nosotros } from './pages/public/nosotros/nosotros';
import { Contacto } from './pages/public/contacto/contacto';
import { ProductoNuevo } from './pages/private/productos/producto-nuevo/producto-nuevo';
import { Producto } from './services/producto';


export const routes: Routes = [
    { path: 'home', component: Home },
    { path: 'login', component: Login },
    { path: 'register', component: Register},
    { path: 'catalogo', component: Catalogo},
    {path: 'nosotros', component: Nosotros},
    {path: 'contacto', component: Contacto},
    { path: 'dashboard', component: Dashboard, canActivate: [ authGuard ] },
    { path: 'admin/user', component: User, canActivate: [ authGuard ] },
    { path: 'admin/tips', component: Tips, canActivate: [ authGuard ]},
    {path: 'admin/product', component: Producto, canActivate: [ authGuard ]},
    { path: 'admin/producto/new', component: ProductoNuevo , canActivate:[ authGuard ]}, 
    { path: 'admin/tips/new', component: tipNewForm, canActivate: [ authGuard ] },
    { path: '**',redirectTo: 'home', pathMatch: 'full'},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    
];
