import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor() { }
  

  ngOnInit() {
  }

 
  pestanna: string[] = ['Vendedor','Inmueble','Ubicacion', 'Anuncio', 'Perfil/Cliente', 'Ocupacion', 'Administrador', 'Aprobar/Anuncio', 'Estadística', 'Facturación', 'Reportes']

}


