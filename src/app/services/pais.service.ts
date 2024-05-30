import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pais } from '../models/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  paises : Pais[]= [];
  ruta: string = 'https://restcountries.com/v3.1/all';//https://restcountries.com/v3.1/all

  constructor(private http: HttpClient) {}

  TraerPaises(): Promise<Pais[]> {
    return new Promise((resolve, reject) => {
      this.http.get(this.ruta).subscribe((respuesta: any) => {
        let europeos = respuesta.filter((element:any)=> {return element.region === "Europe"})
        let africanos = respuesta.filter((element:any)=> {return element.region === "Africa"})
        const paises: Pais[] = [];
        for (let index = 0; index < 3; index++) {
          let paisEuropa = europeos[index];
          let pais = new Pais();
          pais.bandera = paisEuropa.flags.png;
          pais.nombre = paisEuropa.name.common;
          pais.informacion = paisEuropa;
          paises.push(pais);
          let paisAfrica = africanos[index];
          let pais2 = new Pais();
          pais2.bandera = paisAfrica.flags.png;
          pais2.nombre = paisAfrica.name.common;
          pais2.informacion = paisAfrica;
          paises.push(pais2);
        }
        console.log(paises)
        resolve(paises);
      }, error => {
        reject(error);
      });
    });
  }
}
