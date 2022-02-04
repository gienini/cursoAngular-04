import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/ventas.interfaces';

@Pipe({
  name: 'ordenar'
})
export class OrdenarPipe implements PipeTransform {

  transform(heroes: Heroe[], ordenarPor : string = 'nombre'): Heroe[] {

    switch (ordenarPor) {
      case 'volar':
        return heroes.sort( (a,b) => (
          (a.vuela > b.vuela) ? 1 : -1
        ) );
      case 'nombre':
        return heroes.sort( (a,b) => (
          (a.nombre > b.nombre) ? 1 : -1
        ) );
        case 'color':
          return heroes.sort( (a,b) => (
            (a.color > b.color) ? 1 : -1
          ) );
    
      default:
        return heroes;
    }

    // if (ordenarPor === 'sin valor'){
    //   return heroes;
    // }else{
      return heroes.sort( (a,b) => (
        (a.nombre > b.nombre) ? 1 : -1
      ) );
    // }
  }

}
