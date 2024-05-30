import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from '../../../models/pais';
import { Producto } from '../../../models/producto';
import { TablaProductosComponent } from '../../../components/tabla-productos/tabla-productos.component';
import { DetalleProductoComponent } from '../../../components/detalle-producto/detalle-producto.component';
import { DetallePaisComponent } from '../../../components/detalle-pais/detalle-pais.component';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [TablaProductosComponent, DetalleProductoComponent, DetallePaisComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  productoSeleccionado : Producto = new Producto();
  paisSeleccionado : Pais = new Pais();

  constructor(private router : Router){
  }


  mostrar(event:any){
    this.productoSeleccionado = event;
    //console.log(event);
    this.paisSeleccionado = event.pais;
  }
}
