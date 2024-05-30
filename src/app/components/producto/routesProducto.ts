import { Route } from '@angular/router';
import { AuthGuard } from '../../guards/auth.guard';

export default [
  {
    path: 'alta',
    loadComponent: () =>
      import('./alta/alta.component').then((m) => m.AltaComponent),
        canActivate: [AuthGuard]
  },
  {
    path: 'listado',
    loadComponent: () =>
      import('./lista/lista.component').then((m) => m.ListaComponent),
        canActivate: [AuthGuard]
  },
  {
    path: 'listadoPublico',
    loadComponent: () =>
      import('./listado-publico/listado-publico.component').then((m) => m.ListadoPublicoComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./lista/lista.component').then((m) => m.ListaComponent),
        canActivate: [AuthGuard]
  },

] as Route[];