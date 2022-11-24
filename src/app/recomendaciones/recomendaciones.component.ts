import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendaciones',
  templateUrl: './recomendaciones.component.html',
  styleUrls: ['./recomendaciones.component.css']
})
export class RecomendacionesComponent implements OnInit {
  valor="";
  productos=[
    {
      nombre: "Compresa Friopak",
      imagen: "https://lh3.googleusercontent.com/deaL5jE5-l7T2cMmHlsv5pd1bdtiIn_ze1kuB16eKP_0Xnaz07jZ0nn14acESJe8icu--lxtO3eOVFf5hsJctSiY4z1tuYlxuuQ=s650-rw",
      alt: "com",
      precio: 93.19,
      envio: "si"
    },
    {
      nombre: "Furosemida",
      imagen: "https://lh3.googleusercontent.com/ZEvDD6UByPewru_f-9AdLq2kpPCjSqBrDJf-EBxSXuntVXUM9iIKZtOE86ZqzfpUdNbN1Z3gv_oEU-8--xuwqBU-0k3aFwFk5bS3=s650-rw",
      alt: "fur",
      precio: 5.80,
      envio: "no"
    },
    {
      nombre: "Nitrofurasona",
      imagen: "https://lh3.googleusercontent.com/LPLPUJoQTuytVBmGQQGb_zmrfqDm-ujrYavbE0pCJgD08X4hEqQg7fs4b15gPIh6IZXY1g5_8c2YykLJyLYSBvR-7JGlDuN_5li_tzf43YsaWtCL=s650-rw",
      alt: "nit",
      precio: 78.30,
      envio: "si"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
