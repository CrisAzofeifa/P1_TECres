import { Component, OnInit, Input } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  provincias:Array<any>=[];
  cantones:Array<any>=[];
  distritos:Array<any>=[];
  residencia: any ={
    provincia: '',
    canton: '',  
    distrito: '',  
};

comprador: any ={
  nombre:'',
  apellido1:'',
  apellido2:'',
  genero:'',
  nacimiento: '',
  ingresos_mes: 0,
  id_ocupacion: 0,
  id_ubicacion: 0, 
};

  fotos_principales:Array<any>=[];
  fotos_secundarias:Array<any>=[];
  propiedades:Array<any>=[];
  prueba:string;
  busquedas: any ={
    modalidad: 0,
    id: 0,
    pmin: 0,
    pmax: 0,
    habitaciones: 0
      
  };
  anuncio:Array<any>;
  constructor(private data:PeticionesService) {
    
    this.get_propiedades();
    //this.fotos_principales = data.getPrinFotos();

    //console.log('LISTO' + typeof(this.fotos_principales[0]));
    
    
  }
  ngOnInit() {
    
  }

  buscar(){
    console.log(this.busquedas);
  } 
  
  get_propiedades(){
    this.data.getAnuncios().subscribe(datos => this.propiedades= datos);
 
  }
  
  
  get_distritos(provincia:string,  canton:string){
    this.data.getDistritos(provincia, canton).subscribe(datos => this.distritos= datos);
  }
  
    get_cantones(provincia:string){
       this.data.getCantones(provincia).subscribe(datos => this.cantones= datos);
    }
   
  
    get_provincias(){
      this.data.getProvincias().subscribe(datos => this.provincias= datos);
      console.log(this.provincias);
   }

   get_filtro(busquedas){
    this.data.getFiltros(busquedas).subscribe(datos => this.propiedades= datos);
    console.log(this.provincias);
 }


   

}


  

