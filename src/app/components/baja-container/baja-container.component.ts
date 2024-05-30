import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Container } from '../../models/container';
import { ContainerService } from '../../services/container.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-baja-container',
  standalone: true,
  imports: [],
  templateUrl: './baja-container.component.html',
  styleUrl: './baja-container.component.css'
})
export class BajaContainerComponent {
  @Input() container ?: Container;
  @Output() actualizar = new EventEmitter<boolean>(); 

  constructor(private containerService:ContainerService){

  }
  
  limpiarForm(){
    if(this.container?.codigo)
      this.container.codigo = "";
  }

  borrar(){
    if(this.container?.codigo){
      this.container.codigo = "";
      this.containerService.borrarContainers(this.container)
        .then((result)=>{
          if(result){
            Swal.fire("","Container borrado de manera correcta","success");
            this.actualizar.emit(true);
          }else{
            Swal.fire("ERROR","El container no se pudo borrar","error");
          }
        })
    }
  }
}
