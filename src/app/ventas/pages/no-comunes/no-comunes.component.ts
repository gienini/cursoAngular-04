import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //I18nSelect
  nombre : string = 'Sandra';
  genero  :string  = 'femenino';
  esOriginal : boolean = true;

  invitacionMapa ={
    'masculino' : 'invitarlo',
    'femenino' : 'invitarla'
  }

  //I18nPlural

  clientes : string[] = [
    'Maria', 'Patata', 'Mariano'
  ]

  clientesMapa = {
    '=0' : 'no tenemos ningun cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    '=2' : 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }



  //BOTONES

  cambiarCliente(){
    if (this.esOriginal){
      this.genero = 'masculino';
      this.nombre = 'Fran';
    }else{
      this.genero = 'femenino';
      this.nombre = 'Sandra';
    }
    this.esOriginal = !this.esOriginal;
  }

  borrarCliente() {
    this.clientes = this.clientes.slice(0,this.clientes.length -1);
  }



  //KeyValue pipe

  persona = {
    nombre:'Fran',
    edad:30,
    descripcion:'collonuti'
  }

  //Jsonpipe

  personas = [
    {
      nombre:'Fran',
      edad:30,
      descripcion:'collonuti'
    },
    {
      nombre:'Sandra',
      edad:29,
      descripcion:' no tan collonuti'
    }
  ];


  //asyncPipe

  miObserbable = interval(1000); 

  valorPromesa = new Promise ((resolve, reject) =>{
    setTimeout(() => {
      resolve('Promesa resuelta');

    }, 3500)
  });


}
