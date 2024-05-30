import { Component, Input } from '@angular/core';
import { Pais } from '../../models/pais';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-detalle-pais',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detalle-pais.component.html',
  styleUrl: './detalle-pais.component.css'
})
export class DetallePaisComponent {
  @Input() pais?: Pais;
}
