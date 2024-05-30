import { Component } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Pais } from '../../../models/pais';
import { ProductoService } from '../../../services/producto.service';
import Swal from 'sweetalert2';
import { NgIf } from '@angular/common';
import { TablaPaisesComponent } from '../../../components/tabla-paises/tabla-paises.component';

@Component({
  selector: 'app-alta',
  standalone: true,
  imports: [NgIf, TablaPaisesComponent, ReactiveFormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  pais :Pais = new Pais();

  formProducto = this.formBuilder.group({
    codigo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    precio: ['', [Validators.required]],
    stock: ['',[Validators.required]],
    comestible: [true, [Validators.required]],
    pais: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private productoService:ProductoService){

  }

  registrarProducto(){
    //console.log(this.formActor.value);
    if(this.formProducto.valid){
      let data = {
        codigo: this.formProducto.value.codigo,
        descripcion: this.formProducto.value.descripcion,
        precio: this.formProducto.value.precio,
        stock: this.formProducto.value.stock,
        comestible: this.formProducto.value.comestible,
        pais: JSON.stringify(this.pais),
      }
      this.productoService.agregarProducto(data)
        .then((respuesta)=>{
          Swal.fire("","Producto guardado de manera correcta","success")
        })
        .catch((error)=>{
          Swal.fire("","Error al guardar el producto","error")
          console.log(error);
        })
      this.formProducto.reset();
    }else{
      Swal.fire("ERROR","Verifique los datos ingresados","error")
    }
    
  }

  cargarPais(pais:Pais){
    this.pais = pais;
    if(pais.nombre){
      this.formProducto.get('pais')?.setValue(pais.nombre);
    }
    console.log(this.pais)
  }
}
