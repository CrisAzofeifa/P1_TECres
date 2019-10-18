import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.css']
})
export class OcupacionComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  Ocupaciones: Array<any> = [];
  constructor(private service: AdminPeticionesService) { }

  ngOnInit() {

    this.service.getOcupaciones().subscribe(p => this.Ocupaciones = p);
    console.log(this.Ocupaciones);
    //this.service.deleteOcupaciones(13);
  }

  ocupaciones: Array<any> = [

    {Identificador: "1", Nombre: 'A'},
    {Identificador: "2", Nombre: 'B'},
    {Identificador: "3", Nombre: 'C'}
  ]
    

  ocupacionNuevo:Array<any>= [{identificador: 0, nombre: 'Default'}]

  eliminar(nombre1:number){
    this.service.deleteOcupaciones(nombre1).subscribe();
    for (var indice = 0; indice < this.Ocupaciones.length; indice++){
      if(this.Ocupaciones[indice].identificador == nombre1){
        this.Ocupaciones.splice(indice, 1);
      }
    }
    
  }

  agregar1(tipo1:any){
    this.service.postOcupaciones(this.ocupacionNuevo[0]).subscribe();
    this.ocupacionNuevo =  [{identificador: 0, nombre: 'Default'}];
    alert('Se pudo agregar con éxito la nueva ocupación.');
    window.location.reload();

  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( nombre1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.Ocupaciones.length; indice++){
      if(this.Ocupaciones[indice].nombre == nombre1){
        this.Ocupaciones[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.Ocupaciones.length; indice++){
      console.log(this.Ocupaciones[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.Ocupaciones.push(this.ocupacionNuevo[0]);
    //this.ocupacionNuevo = [{identificador: "0", nombre: 'Default'}];
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
