import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.css']
})
export class OcupacionComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }

  ocupaciones: Array<any> = [

    {Identificador: "1", Nombre: 'A'},
    {Identificador: "2", Nombre: 'B'},
    {Identificador: "3", Nombre: 'C'}
  ]
    

  ocupacionNuevo:Array<any>= [{Identificador: "0", Nombre: 'Default'}]

  eliminar(nombre1:any){
    
    for (var indice = 0; indice < this.ocupaciones.length; indice++){
      if(this.ocupaciones[indice].Nombre == nombre1){
        this.ocupaciones.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( nombre1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.ocupaciones.length; indice++){
      if(this.ocupaciones[indice].Nombre == nombre1){
        this.ocupaciones[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.ocupaciones.length; indice++){
      console.log(this.ocupaciones[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.ocupaciones.push(this.ocupacionNuevo[0]);
    this.ocupacionNuevo = [{Identificador: "0", Nombre: 'Default'}];
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
