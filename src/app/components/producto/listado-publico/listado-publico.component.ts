import { Component } from '@angular/core';
import { TablaProductosComponent } from '../../../components/tabla-productos/tabla-productos.component';

@Component({
  selector: 'app-listado-publico',
  standalone: true,
  imports: [TablaProductosComponent],
  templateUrl: './listado-publico.component.html',
  styleUrl: './listado-publico.component.css'
})
export class ListadoPublicoComponent {

}
