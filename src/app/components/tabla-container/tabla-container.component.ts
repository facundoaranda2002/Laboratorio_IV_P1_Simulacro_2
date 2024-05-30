import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container } from '../../models/container';
import { ContainerService } from '../../services/container.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tabla-container',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './tabla-container.component.html',
  styleUrl: './tabla-container.component.css'
})
export class TablaContainerComponent {
  containeres : Array<Container> = [];
  @Input()  mostrarSeleccionar : boolean = true;
  @Output() eventContainerSeleccionada = new EventEmitter<Container>();
  
  constructor(private containerService:ContainerService){
  }

  async ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.containerService.getContainers()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.containeres = respuesta;
    });
  }

  seleccionar(container : Container){
    this.eventContainerSeleccionada.emit(container);
  }
}
