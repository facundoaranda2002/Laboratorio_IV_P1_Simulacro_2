import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-bienvenida',
  standalone: true,
  imports: [],
  templateUrl: './bienvenida.component.html',
  styleUrl: './bienvenida.component.css'
})
export class BienvenidaComponent {
  usuario ?: string;
  id ?: number;
  nombre ?: string;
  localidad ?: string;
  seguidores ?: number;
  seguidos ?: number;
  cantidadRepositorios ?: number;
  urlGithub ?: string;
  urlImagen ?: string;

  constructor(private githubService: GithubService){
    this.githubService.getDatos().subscribe((resultado : any)=>{
      //console.log(resultado);
      this.usuario = resultado.login;
      this.id = resultado.id;
      this.nombre = resultado.name;
      this.localidad = resultado.location;
      this.seguidores = resultado.followers;
      this.seguidos = resultado.following;
      this.cantidadRepositorios = resultado.public_repos;
      this.urlGithub = resultado.html_url;
      this.urlImagen = resultado.avatar_url;
    })
  }
}
