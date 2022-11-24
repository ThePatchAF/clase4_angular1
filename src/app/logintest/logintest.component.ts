import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logintest',
  templateUrl: './logintest.component.html',
  styleUrls: ['./logintest.component.css']
})
export class LogintestComponent implements OnInit {
  estaLogueado:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

}
