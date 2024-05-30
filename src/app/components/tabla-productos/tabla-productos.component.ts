import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Producto } from '../../models/producto';
import { ProductoService } from '../../services/producto.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tabla-productos',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tabla-productos.component.html',
  styleUrl: './tabla-productos.component.css'
})
export class TablaProductosComponent {
  productos : Array<Producto> = [];
  @Input()  mostrarSeleccionar : boolean = false;
  @Input()  mostrarPublicos : boolean = false;
  @Output() eventRepartidorSeleccionado = new EventEmitter<Producto>();
  
  constructor(private productoService:ProductoService){
  }

  async ngOnInit(){

    await this.productoService.getProductos()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.productos = respuesta;
    });

    //console.log(this.productos)
    if(this.mostrarPublicos){
      this.productos = this.productos.filter((element:any)=> element.stock > 0);
    }
  }

  seleccionar(producto : Producto){
    this.eventRepartidorSeleccionado.emit(producto);
  }
}
