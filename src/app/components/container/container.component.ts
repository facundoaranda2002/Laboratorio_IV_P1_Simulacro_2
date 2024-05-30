import { Component, ViewChild } from '@angular/core';
import { Container } from '../../models/container';
import { TablaContainerComponent } from '../tabla-container/tabla-container.component';
import { ModificarContainerComponent } from '../modificar-container/modificar-container.component';
import { BajaContainerComponent } from '../baja-container/baja-container.component';
import { AltaContainerComponent } from '../alta-container/alta-container.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [TablaContainerComponent, ModificarContainerComponent, BajaContainerComponent, AltaContainerComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  containerSeleccionada ?: Container;
  @ViewChild('tablaContainer') tabla?: TablaContainerComponent;
  @ViewChild('inputModificar') inputModificar?: ModificarContainerComponent;
  @ViewChild('inputBaja') inputBaja?: BajaContainerComponent;
  @ViewChild('inputAlta') inputAlta?: AltaContainerComponent;

  mostrar(event:any){
    //console.log(event);
    this.containerSeleccionada = event;
    this.inputModificar?.valores(event);
  }

  actualizarLista(){
    this.tabla?.actualizar();
    this.inputModificar?.limpiarForm();
    this.inputAlta?.limpiarForm();
    this.inputBaja?.limpiarForm();
  }

}
