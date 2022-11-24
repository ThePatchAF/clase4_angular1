import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  name: string="Anthony"
  constructor() { }

  ngOnInit(): void {
  }

  addApellido(){
    this.name=`${this.name} Frankis`
  }
  contador:number=0;
  suma(){
    this.contador++
  }
  resta(){
    this.contador--
  }

  verSeleccion(elemento:any){
    console.log(elemento)
    alert(elemento.target.innerHTML)
  }

  tamano:number=0;

}
