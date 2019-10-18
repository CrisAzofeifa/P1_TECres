import { Component, OnInit } from '@angular/core';
import { NullTemplateVisitor } from '@angular/compiler';
import { PeticionesService } from '../peticiones.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  disp: boolean = false;
  cliente:Object;
  nuevo: any ={
    correo:'',
    contrasena: '',
  };
  constructor(private data:PeticionesService, private ruta:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    
  }

  get_login(correo:string,pass:string){
    this.data.login(correo, pass).subscribe(
      res => {
        console.log(res);
        this.cliente= res;
        console.log('LA INFORMACION DE USUARIO ES'+ this.cliente[0].cedula)
 
       },
       error => {
         console.error(error);
         alert(error.error.Message);

         
       },
       () => this.navigate());
  }
  get_cliente(correo:string){
    this.data.getCliente(correo).subscribe(datos => this.cliente= datos);
    console.log('Hola soy: '+ this.cliente[0].usuario);
  
  }
  
  entrar(){

  }
  navigate() {
    //this.router.navigateByUrl('signin/cliente', this.cliente);
    console.log(this.cliente[0])
    this.router.navigate(['signin/cliente', this.cliente[0].cedula], {queryParams: {idUser: this.cliente[0].cedula}})
  }



}
