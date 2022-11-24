import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direct-atrib',
  templateUrl: './direct-atrib.component.html',
  styleUrls: ['./direct-atrib.component.css']
})
export class DirectAtribComponent implements OnInit {

  isChecked:boolean=false;
  pasarRojo:boolean=false;
  pasarVerde:boolean=false;
  pasarMorado:boolean=false;

  hacerGrande:boolean=false;
  template:boolean=false;

  cambiarColores={};
  setCambiarColores(){
    this.cambiarColores={
      "rojo":this.pasarRojo,
      "verde":this.pasarVerde,
      "morado": this.pasarMorado
    }
  }

  mostrarInput(e:string, a:any){
    console.log('el valor del input es: ' + e)
    console.log(a)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
