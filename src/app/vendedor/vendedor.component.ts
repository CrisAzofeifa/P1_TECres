import { Component, OnInit } from '@angular/core';
import { print } from 'util';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-vendedor',
  templateUrl: './vendedor.component.html',
  styleUrls: ['./vendedor.component.css']
})

export class VendedorComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  private newAttribute: any = {};
  constructor(private data:PeticionesService) { 
    this.getVendedores();
  }

  ngOnInit() {
  }

  vendedores: Array<any> = [

  ];
  l: Array<any> = [

  ]

  idTemp;

  vendedorNuevo:Array<any>= [{FechaIngreso:'0/0/0', Nombre: 'Default', Apellido1:'Default',Apellido2:'Default',cedula:0}]

  eliminarVendedor(id){
    
    for (var indice = 0; indice < this.vendedores.length; indice++){
      if(this.vendedores[indice].id_vendedor == id){
        this.vendedores.splice(indice, 1);
        this.deleteVendedor(id);
        }
      }
    }
    

  cambiarValor(event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( cedula1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.vendedores.length; indice++){
      if(this.vendedores[indice].cedula == cedula1){
        this.vendedores[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }


  imprimirLista(){
    for (var indice = 0; indice < this.vendedores.length; indice++){
      console.log(this.vendedores[indice]);
    }
  }

  agregar(nombre:any,apellido1:any,apellido2:any,cedula:any,fechaIngreso:any){

    var n = (<HTMLInputElement>document.getElementById(nombre));
    var a1= (<HTMLInputElement>document.getElementById(apellido1));
    var a2 =(<HTMLInputElement>document.getElementById(apellido2));
    var c =(<HTMLInputElement>document.getElementById(cedula));
    var fi =(<HTMLInputElement>document.getElementById(fechaIngreso));

    if(n == null || n.value == ""){
      alert("Debe ingresar el nombre del vendedor");
    }else if(a1 == null || a1.value == ""){
      alert("Debe ingresar el primer apellido del vendedor");
    }else if(a2 == null || a2.value == ""){
      alert("Debe ingresar el segundo apellido del vendedor");
    }else if(c == null || c.value == ""){
      alert("Debe ingresar un numero de cedula");
    }else if(fi == null || fi.value == ""){
      alert("Debe anotar la fecha de ingreso del vendedor");
    }else{
    var vendedor = {fecha_ingreso: fi.value, nombre: n.value, apellido1:a1.value,apellido2:a2.value,cedula:c.value}; 
    console.log(vendedor);
    n.value = "";
    a1.value = "";
    a2.value = "";
    c.value = "";
    fi.value = "";    
    this.data.addVendedor(vendedor).subscribe();
    alert("Se ha añadido satisfactoriamente el vendedor");
    var a = 0;
    window.location.reload();
    }
  }
    


  getVendedores(){
    this.data.getVendedores().subscribe(datos => this.vendedores = datos);
  }

  setIdTemp(idT){
    this.idTemp = idT;
  }
  getIdTemp(){
    return this.idTemp;
  }

  deleteVendedor(cedula){
    this.data.deleteVendedor(cedula).subscribe();
  }

  modificarVendedor(id, fechaingreso,nombre ,apellido_1,apellido_2,cedula1){
    var modificado = {fecha_ingreso : fechaingreso, nombre: nombre, apellido1 : apellido_1, apellido2 : apellido_2,cedula : cedula1, id_vendedor : id}; 
    this.data.modificarVendedor(id,modificado).subscribe();
    window.location.reload();

  };
}


