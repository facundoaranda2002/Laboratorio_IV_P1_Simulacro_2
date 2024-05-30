import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class PerfilGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    const user = localStorage.getItem('user');

    if (user) {

      let usuario = JSON.parse(user) as Usuario;

      if(usuario.perfil === 'admin'){
        return true;
      }  
      else{
        Swal.fire("","Usuario no autorizado","error")
        this.router.navigate(['/home']);
        return false;
      }
        

    } else {
      Swal.fire("","Usuario no autorizado","error")
      this.router.navigate(['/login']);
      return false;
    }
  }
}