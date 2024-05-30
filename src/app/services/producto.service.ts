import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, updateDoc, getDocs,doc,deleteDoc } from '@angular/fire/firestore';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos : Array<Producto> = [];

  constructor(private firestore: Firestore) { }

  agregarProducto (repartidor:any) {
    const ref = collection(this.firestore,'productos2');
    return addDoc(ref,repartidor);
  }

  async getProductos() {
    const querySnapshot = await getDocs(collection(this.firestore, "productos2"));
    this.productos = [];
    querySnapshot.forEach((doc) => {
      let producto = doc.data() as any;
      if(producto.pais)
      producto.pais = JSON.parse(producto.pais);
      this.productos.push(producto)
    });
    return this.productos;
  }
}
