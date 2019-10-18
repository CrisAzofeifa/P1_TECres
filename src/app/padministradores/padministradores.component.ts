import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padministradores',
  templateUrl: './padministradores.component.html',
  styleUrls: ['./padministradores.component.css']
})
export class PadministradoresComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }

  administradores: Array<any> = [

    {FechaNacimiento: "01-02-1980", FechaIngresoTECres: '2-3-2019', Nombre:'A',Apellido1:'asd',Apellido2:'dsa',Edad:30,Cedula:1},
    {FechaNacimiento: "01-02-1980", FechaIngresoTECres: '3-3-2019', Nombre:'B',Apellido1:'asd',Apellido2:'dsa',Edad:30,Cedula:2}
  ]

  adminsitradorNuevo:Array<any>= [{FechaNacimiento: "0-0-0", FechaIngresoTECres: '0-0-0', Nombre:'Default',Apellido1:'Default',Apellido2:'Default',Edad:0,Cedula:0}]

  eliminar(cedula1:any){
    
    for (var indice = 0; indice < this.administradores.length; indice++){
      if(this.administradores[indice].cedula == cedula1){
        this.administradores.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( cedula1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.administradores.length; indice++){
      if(this.administradores[indice].cedula == cedula1){
        this.administradores[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.administradores.length; indice++){
      console.log(this.administradores[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.administradores.push(this.adminsitradorNuevo[0]);
    this.adminsitradorNuevo = [{FechaNacimiento: "0-0-0", FechaIngresoTECres: '0-0-0', Nombre:'Default',Apellido1:'Default',Apellido2:'Default',Edad:0,Cedula:0}];
    this.editField = null;
    

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
