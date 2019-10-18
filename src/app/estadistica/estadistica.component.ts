import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.css']
})
export class EstadisticaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  anuncios: Array<any> = [

    {Titulo: "Anuncio 1", Visitas: 56,Tipo:"normal"},
    {Titulo: "Anuncio 2", Visitas: 76,Tipo:"destacado"},
    {Titulo: "Anuncio 3", Visitas: 10,Tipo:"oro"},
    {Titulo: "Anuncio 4", Visitas: 20,Tipo:"platino"},
    {Titulo: "Anuncio 5", Visitas: 60,Tipo:"nuevo"}
  ]

  
}

    
 
  



