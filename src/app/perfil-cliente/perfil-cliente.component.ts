import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';
@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})
export class PerfilClienteComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  perfilClientes: Array<any> = [];
  constructor(private service: AdminPeticionesService) { }
  nuevo_perfilClientes: Array<any> = [{descripcion:'Default',nombre:'Default', incorporado_por:1}];
  ngOnInit() {
    this.service.getPerfilClientes().subscribe(p => this.perfilClientes = p);
    console.log(this.perfilClientes);
    this.service.postPerfilCliente(this.nuevo_perfilClientes[0]).subscribe();
  }

  

  clientes: Array<any> = [

    {Descripcion: "Aente Vendedor", Nombre: 'A', cedulaAdmin:'111'},
    {Descripcion: "Constructor", Nombre: 'B', cedulaAdmin:'111'},
    {Descripcion: "Propietario", Nombre: 'C', cedulaAdmin:'111'},
    {Descripcion: "Anunciante", Nombre: 'D', cedulaAdmin:'111'}
  ]

  clienteNuevo:Array<any>= [{Descripcion: "Default", Nombre: 'Default', incorporado_por:'0'}];

  eliminar(nombre1:string){
    if(nombre1 == 'Agente' || nombre1 == 'Agente Vendedor' || nombre1 == 'Anunciante' || nombre1 == 'Constructor' || nombre1 == 'Propietario' || nombre1 == 'Vendedor'){
      alert('No se puede eliminar este perfil de cliente pues es DEFAULT.');
    }else{

      this.service.deletePerfilCliente(nombre1).subscribe();

     for (var indice = 0; indice < this.perfilClientes.length; indice++){
      if(this.perfilClientes[indice].nombre == nombre1){
        this.perfilClientes.splice(indice, 1);
      }
    }

    }
  }

  agregar1(){
    this.service.postPerfilCliente(this.nuevo_perfilClientes[0]).subscribe();
    this.nuevo_perfilClientes = [{descripcion:'Default',nombre:'Default', incorporado_por:0}];
    alert('Se pudo agregar con éxito el nuevo perfil de cliente.');
  }


  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( nombre1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.perfilClientes.length; indice++){
      if(this.perfilClientes[indice].nombre == nombre1){
        this.perfilClientes[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.perfilClientes.length; indice++){
      console.log(this.perfilClientes[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.perfilClientes.push(this.nuevo_perfilClientes[0]);
    //this.nuevo_perfilClientes = [{descripcion:'Default',nombre:'Default', incorporado_por:0}];
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
