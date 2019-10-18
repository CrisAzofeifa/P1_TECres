import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';

@Component({
  selector: 'app-padministradores',
  templateUrl: './padministradores.component.html',
  styleUrls: ['./padministradores.component.css']
})
export class PadministradoresComponent implements OnInit {
  perfil_administradores: Array<any> = [];
  editField: string;
  public valorBusqueda:string;
  constructor(private service: AdminPeticionesService) { }
  adminsitradorNuevo:Array<any>= [{nacimiento: "0001-01-01", ingreso: "0001-01-01", nombre:'Default',apellido1:'Default',apellido2:'Default',cedula:0,password:"1"}]
  ngOnInit() {
    this.service.getPerfilAdministradores().subscribe(p => this.perfil_administradores = p);
    console.log(this.perfil_administradores);
    //this.service.postPerfilAdministrador(this.adminsitradorNuevo[0]).subscribe();
  }

  administradores: Array<any> = [

    {FechaNacimiento: "01-02-1980", FechaIngresoTECres: '2-3-2019', Nombre:'A',Apellido1:'asd',Apellido2:'dsa',Edad:30,Cedula:1},
    {FechaNacimiento: "01-02-1980", FechaIngresoTECres: '3-3-2019', Nombre:'B',Apellido1:'asd',Apellido2:'dsa',Edad:30,Cedula:2}
  ]

  

  eliminar(id:number){
    this.service.deletePerfilAdministrador(id).subscribe();
    for (var indice = 0; indice < this.perfil_administradores.length; indice++){
      if(this.perfil_administradores[indice].id_admin == id){
        this.perfil_administradores.splice(indice, 1);
      }
    }
    
  }

  agregar1(cedula1:any){
    this.service.postPerfilAdministrador(this.adminsitradorNuevo[0]).subscribe();
    this.adminsitradorNuevo= [{nacimiento: "0000-00-00", ingreso: "0000-00-00", nombre:'Default',apellido1:'Default',apellido2:'Default',cedula:0,password:"1"}]
    alert('Se pudo agregar con éxito el nuevo perfil de administrador.');
    window.location.reload();
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( cedula1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.perfil_administradores.length; indice++){
      if(this.perfil_administradores[indice].id_admin == cedula1){
        this.perfil_administradores[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.perfil_administradores.length; indice++){
      console.log(this.perfil_administradores[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.perfil_administradores.push(this.adminsitradorNuevo[0]);
    //this.adminsitradorNuevo= [{nacimiento: "0000-00-00", ingreso: "0000-00-00", nombre:'Default',apellido1:'Default',apellido2:'Default',cedula:0}]
    //this.editField = null;
    

  }

  buscar(tipo1:any,id1:any){
    this.valorBusqueda = (<HTMLInputElement>document.getElementById(tipo1)).value;
    const elemento = (<HTMLInputElement>document.getElementById(id1));

    console.log(this.valorBusqueda);
    if(elemento==null){
      (<HTMLInputElement>document.getElementById(tipo1)).scrollIntoView({behavior: 'smooth'});
    }
    else{
      (<HTMLInputElement>document.getElementById(id1)).scrollIntoView({behavior: 'smooth'});
    }
    return this.valorBusqueda;

  }

}
