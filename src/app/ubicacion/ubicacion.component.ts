import { Component, OnInit } from '@angular/core';

import { PeticionesService } from '../peticiones.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor(private data:PeticionesService) {
    this.getUbicaciones();
  }

  ngOnInit() {
    
  }

  ubicaciones: Array<any> = [
  ];

  ubicacion: any = {
      provincia: "",
      canton: "",
      distrito:""
  };
  

  idTemp: Variable;

  eliminar(ID1:any){
    if(ID1 > 479) {
      for (var indice = 0; indice < this.ubicaciones.length; indice++){
        if(this.ubicaciones[indice].id == ID1){
          this.ubicaciones.splice(indice, 1);
          console.log(ID1);
          this.deleteUbicacion(ID1);
        }
      }
    }else{
      alert("No se puede borrar, es un valor default"); 
    }

    
  }
  deleteUbicacion(id){
    this.data.deleteUbicacion(id).subscribe();
  }
  

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( ID1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.ubicaciones.length; indice++){
      if(this.ubicaciones[indice].id == ID1){
        this.ubicaciones[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.ubicaciones.length; indice++){
      console.log(this.ubicaciones[indice]);
    }
  }

  agregarUbicacion(provincia : any, canton : any, distrito : any){
    var p = (<HTMLInputElement>document.getElementById(provincia));
    var c= (<HTMLInputElement>document.getElementById(canton));
    var d =(<HTMLInputElement>document.getElementById(distrito));

    if(p == null || p.value == ""){
      alert("Debe ingresar un nombre de provincia");
    }else if(c == null || c.value == ""){
      alert("Debe ingresar un nombre de canton");
    }else if(d == null || d.value == ""){
      alert("Debe ingresar un nombre de distrito");
    }else{
      this.ubicacion = {
        provincia: p.value,
        canton: c.value,
        distrito: d.value   
    };
    console.log(this.ubicaciones);
    this.data.addUbicacion(this.ubicacion).subscribe();
    p.value = "";
    c.value = "";
    d.value = "";
    alert("Se ha añadido satisfactoriamente la ubicación");
    var a = 0;
    window.location.reload();
    }

  }


  modificarUbicacion(provincia1, canton1,distrito1,id1){
    var modificado = {
      provincia: provincia1,
      canton: canton1,
      distrito:distrito1,
      id: id1
  }; 
    this.data.modificarUbicaciones(id1,modificado).subscribe();
    window.location.reload();
  }


  getUbicaciones(){
    this.data.getUbicaciones().subscribe(datos => this.ubicaciones = datos);
  }

  setIdTemp(idT){
    this.idTemp = idT;
  }
  getIdTemp(){
    return this.idTemp;
  }
}
