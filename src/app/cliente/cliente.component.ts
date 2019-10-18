import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})

export class ClienteComponent implements OnInit {
  show1: boolean = true;
  show2: boolean = false;
  show3: boolean = false;
  
  propiedades:Array<any>=[];
  tiposAnuncios:Array<any>=[];
  inmuebles:Array<any>=[];
  anuncios:Array<any>=[];
  publicos:Array<any>=[];
  anuncioNuevo:Array<any>=[{visitas:0, vendedor:1,  publico:1,id_cliente:1 }];
  l:Array<any>=[];
  id:number;

 

  constructor(private data:PeticionesService, private ruta:ActivatedRoute) { 
    this.ruta.params.subscribe(params =>{
      console.log('CARGANDO USUARIO: ' +params['id'])
      this.id= params['id'];
    
      }
      
   );
   
    
    
  }

  ngOnInit() {

  }
  get_propiedades(id:number){
    this.data.getCPropiedades(id).subscribe(datos => this.propiedades= datos);
    console.log('LAS PROPIEDADES OBTENIDAS SON: ' + this.propiedades )
 }
 get_anuncios(id:number){
  this.data.getCAnuncios(id).subscribe(datos => this.anuncios= datos);
}
get_tipo_anuncio(){
  this.data.getTipoAnuncio().subscribe(datos => this.tiposAnuncios= datos);
  console.log(this.tiposAnuncios);
}
add_anuncio(){
  this.anuncioNuevo[0].precio= this.anuncioNuevo[0].precio*1;
  this.anuncioNuevo[0].tarjeta_credito= this.anuncioNuevo[0].tarjeta_credito*1;
  this.anuncioNuevo[0].propiedad= this.anuncioNuevo[0].propiedad*1;
  this.data.addAnuncio(this.anuncioNuevo[0]);
  console.log(this.anuncioNuevo)
}
add2(){
  console.log('LOS ANUNCIOS SON: ' + this.anuncioNuevo)
}
add(){

}


get_usuario(id:number){
  //this.data.getUsuario(id).subscribe(datos => this.anuncio= datos);
  //console.log('EL ANUNCIO OBTENIDO ES: ' + this.anuncio )
}

TEST(){
    
  this.get_propiedades(this.id);
  this.get_anuncios(this.id);
}
agregar_anuncio(){
 

}
  

}
