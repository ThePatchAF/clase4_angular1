import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase2',
  templateUrl: './clase2.component.html',
  styleUrls: ['./clase2.component.css']
})
export class Clase2Component implements OnInit {
  disabled = false;
  name="Anthony Frankis";

  description():string {
    return "le description Eu laborum labore esse ad aliqua quis laborum.Nostrud eiusmod consequat ex ea cupidatat incididunt excepteur fugiat incididunt laboris amet laborum do laborum. Pariatur qui culpa ut mollit. Ea qui occaecat Lorem fugiat aliquip in.";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
