import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {
  productos=[
    {
      id: 1,
      nombre: "Alfombra Trust Mika Gaming",
      precio: 391.60,
      imagenURL:"https://http2.mlstatic.com/D_Q_NP_634149-MLV51934283919_102022-AB.webp",
      tipoEnvio: "Gratis"
    },
    {
      id: 2,
      nombre: "Audifonos Gaming Headset F009",
      precio: 270.20,
      imagenURL:"https://http2.mlstatic.com/D_Q_NP_961605-MLV46665687978_072021-AB.webp",
      tipoEnvio: "Gratis"
    },
    {
      id: 3,
      nombre: "Mi Smart Home Hub Xiaomi Controlador IA",
      precio: 342.45,
      imagenURL:"https://http2.mlstatic.com/D_Q_NP_630473-MLV48101046661_112021-AB.webp",
      tipoEnvio: "Gratis"
    },
    {
      id: 4,
      nombre: "Basico Clothes Cargopants Black",
      precio: 195.70,
      imagenURL:"https://http2.mlstatic.com/D_Q_NP_807302-MLV50683070666_072022-AB.webp",
      tipoEnvio: "Pago"
    },
    {
      id: 5,
      nombre: "Gorro Natación Silicon",
      precio: 146.75,
      imagenURL:"https://http2.mlstatic.com/D_Q_NP_989829-MLV51951092919_102022-AB.webp",
      tipoEnvio: "Pago"
    }
  ]
  constructor(private route:ActivatedRoute) { }

  prodID:any;
  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    const id= this.route.snapshot.paramMap.get('id');
    console.log(id)
    this.prodID=id;
  }

}
