import { Component, OnInit } from '@angular/core';

import { PeticionesService } from '../peticiones.service';



import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

  
})
export class LoginComponent implements OnInit {

 

  show: boolean = true;
 
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

    residencia: any ={
    provincia: '',
    canton: '',  
    distrito: '',  
};

  vendedor: any ={
    nombre:'',
    apellido1:'',
    apellido2:'',
    cedula: 0,
    correo:'',
    pass: '',
    usuario:'',
    id_perfil:'',
    nacionalidad:'',
  };

  

  generos:Array<any>=[
    {id: 'H',
     nombre:'Hombre'},
     {id: 'M',
     nombre:'Mujer'},
     {id: 'N',
     nombre:'Otro'},
  ];

  ubicaciones:Array<any>;
  fc:string;
  provincias:Array<any>=[];
  cantones:Array<any>=[];
  distritos:Array<any>=[];
  perfiles:Array<any>=[];

  ocupaciones:Array<any>=[];
  gentilicios:Array<any>=[];



  plainText: string;
  encPassword: string='123';




  constructor(private data:PeticionesService) { 
 
    this.get_perfiles();
    this.get_provincias();
    this.get_ocupaciones();
    this.get_gentilicios();
  }

  ngOnInit() {
  
  }

  agregar_comprador(){
    console.log(this.comprador);

    this.comprador={
      nombre:'',
      genero:'',
      nacimiento: '',
      ingresos_mes: '',
      id_ocupacion: '',
      id_ubicacion: '',
    }
  
    
  }
  agregar_vendedor(){
    console.log( this.vendedor.nacionalidad);
    this.vendedor={
      nombre:'',
      apellido1:'',
      apellido2:'',
      cedula: 0,
      correo:'',
      pass: '',
      usuario:'',
      id_perfil:'',
    }
  }

  get_gentilicios(){

    this.data.getGentilicios().subscribe(datos => this.gentilicios= datos);

 }
  get_perfiles(){

    this.data.getPerfiles().subscribe(datos => this.perfiles= datos);

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
  
  

  get_ocupaciones(){

      this.data.getOcupaciones().subscribe(datos => this.ocupaciones= datos);
      console.log(this.ocupaciones);


    }

    add_interesado(){
      if (this.comprador.nombre ==''||
          this.comprador.apellido1==''||
          this.comprador.apellido2==''||
          this.comprador.genero==''||
          this.comprador.id_ocupacion==0||
          this.comprador.id_ubicacion ==0||
          this.comprador.ingresos_mes==0||
          this.comprador.nacimiento==''
           ) 
      {
        alert("Necesitamos que brindes toda la información para continuar!");
      } 
      else{
      this.comprador.id_ocupacion = (this.comprador.id_ocupacion) *1
      this.comprador.id_ubicacion = (this.comprador.id_ubicacion) *1
      this.data.addInteresado(this.comprador).subscribe();
      } 
      
    }

    encriptar(){
      
    
      
    }
    add_cliente(){
      
      console.log(this.vendedor)
      if (this.vendedor.nombre ==''||
          this.vendedor.apellido1==''||
          this.vendedor.apellido2==''||
          this.vendedor.cedula==0||
          this.vendedor.correo==''||
          this.vendedor.id_perfil ==''||
          this.vendedor.usuario==''
           ) 
      {
        alert("Necesitamos que brindes toda la información para continuar!");
      } 
      else{
        this.vendedor.pass = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();
      
        this.data.addCliente(this.vendedor).subscribe();
      
      //console.log('Desencriptado'+ CryptoJS.AES.decrypt(this.vendedor.pass.trim(), this.encPassword.trim()).toString(CryptoJS.enc.Utf8));
      } 

      
    }

   
  
}
