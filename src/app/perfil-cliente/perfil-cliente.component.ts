import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }

  clientes: Array<any> = [

    {Descripcion: "Aente Vendedor", Nombre: 'A', cedulaAdmin:'111'},
    {Descripcion: "Constructor", Nombre: 'B', cedulaAdmin:'111'},
    {Descripcion: "Propietario", Nombre: 'C', cedulaAdmin:'111'},
    {Descripcion: "Anunciante", Nombre: 'D', cedulaAdmin:'111'}
  ]

  clienteNuevo:Array<any>= [{Descripcion: "Default", Nombre: 'Default', cedulaAdmin:'0'}]

  eliminar(nombre1:any){
    
    for (var indice = 0; indice < this.clientes.length; indice++){
      if(this.clientes[indice].Nombre == nombre1){
        this.clientes.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( nombre1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.clientes.length; indice++){
      if(this.clientes[indice].Nombre == nombre1){
        this.clientes[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.clientes.length; indice++){
      console.log(this.clientes[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.clientes.push(this.clienteNuevo[0]);
    this.clienteNuevo = [{Descripcion: "Default", Nombre: 'Default', cedulaAdmin:'0'}];
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
