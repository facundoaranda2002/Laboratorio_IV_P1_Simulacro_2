import { Routes } from '@angular/router';
import { PerfilGuard } from './guards/perfil.guard';

export const routes: Routes = [
    {
        path: 'bienvenida',
        loadComponent: () => import('./components/bienvenida/bienvenida.component').then((m) => m.BienvenidaComponent)
    },
    { 
        path: 'login', 
        loadComponent: () => import('./components/login/login.component').then((m) => m.LoginComponent)
    },
    { 
        path: 'container', 
        loadComponent: () => import('./components/container/container.component').then((m) => m.ContainerComponent),
        canActivate: [PerfilGuard] 
    },
    { 
        path: 'producto', 
        loadChildren: () => import('./components/producto/routesProducto')
    },
    {
        path: '',
        loadComponent: () => import('./components/bienvenida/bienvenida.component').then((m) => m.BienvenidaComponent)
    },
    {
        path: '**',
        redirectTo: '/bienvenida',
    },
];
