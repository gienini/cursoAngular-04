import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  valor = undefined;

  parametroDefecto = true;

  toggleMayusculas(){
    this.parametroDefecto = !this.parametroDefecto;
  }


  //tabla

  heroes : Heroe[] = [
    {
      nombre : 'Superman',
      color: Color.azul,
      vuela:true
    },
    {
      nombre : 'Batman',
      color: Color.negro,
      vuela:false
    },
    {
      nombre : 'Robin',
      color: Color.verde,
      vuela:false
    },
    {
      nombre : 'Robin',
      color: Color.verde,
      vuela:false
    },

  ]


  ordenarPor : string = 'nombre';


  cambiarOrden(valor : string){
  this.ordenarPor= valor;
  }

}
