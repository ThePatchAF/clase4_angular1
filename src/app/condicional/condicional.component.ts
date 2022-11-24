import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {

  control:string="VIP";
  seMuestra:string="block"
  seOculta:string="none"
  constructor() { }

  ngOnInit(): void {
  }

}
