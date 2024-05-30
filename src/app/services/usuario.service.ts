import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Router } from '@angular/router';
import { Firestore, addDoc, collection, updateDoc, getDocs,doc,deleteDoc } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  listaUsuarios:Usuario[] = [];

  constructor(private router:Router, private firestore: Firestore) {

  }

   async traerUsuariosBase() {
    const querySnapshot = await getDocs(collection(this.firestore,'usuarios'));
    querySnapshot.forEach((doc:any) => {
      let usuario = doc.data() as Usuario;
      this.listaUsuarios.push(usuario)
    });
  }

  obtenerUsuario(unUsuario:Usuario):boolean{
    let flag:boolean=false;
    this.listaUsuarios.forEach((usuario)=>{
      if(usuario.usuario===unUsuario.usuario && usuario.clave ===unUsuario.clave){
        localStorage.setItem('user',JSON.stringify(usuario))
        flag = true;
      }
    })
    return flag;
  }

  async logout(){
    localStorage.removeItem("user");
    this.router.navigate(['login'], { replaceUrl: true });
  }
}
