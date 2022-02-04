import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent{

  nombreLower : string = "fran";
  nombreUpper : string = "FRAN";
  nombremal : string = "adsgfaf";

  fecha : Date = new Date();
  

}
