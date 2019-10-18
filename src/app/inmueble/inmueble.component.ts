import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
  editField: string;
  campo: string;
  inmuebles: Array<any> = []; // lista que se obtiene del API... y se puede iterar...

  public valorBusqueda:string;
  constructor(private service: AdminPeticionesService) { }

  ngOnInit() {
    this.service.getInmuebles().subscribe(p => this.inmuebles = p);
    console.log(this.inmuebles);


    

  }


  inmuebleNuevo:Array<any>= [{Tipo:'Default',definido_por: 1}];

  modificar(tipo1:string, definido_por1:number){
    var p = {Tipo:tipo1,definido_por: definido_por1.toString()};
    this.service.putInmueble(tipo1,p).subscribe();
  }

  eliminar(Tipo1:string){
    if (Tipo1 == "Lote" || Tipo1 == 'Casa' || Tipo1 == 'Apartamento'){
      alert('No se puede eliminar este tipo de inmueble pues es DEFAULT.');

    }else {

      this.service.deleteInmueble(Tipo1).subscribe();
  
   
    
 
    for (var indice = 0; indice < this.inmuebles.length; indice++){
      if(this.inmuebles[indice].Tipo == Tipo1){
        this.inmuebles.splice(indice, 1);
      }
    }

   }
  }

  agregar1(tipo1:any){
    this.service.postInmuebles(this.inmuebleNuevo[0]).subscribe();
    this.inmuebleNuevo = [{Tipo:'Default',definido_por: 1}]
    alert('Se pudo agregar con éxito el nuevo inmueble.');
  }

  cambiarValor(event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( Tipo1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);
    
    for (var indice = 0; indice < this.inmuebles.length; indice++){
      if(this.inmuebles[indice].Tipo == Tipo1){
        this.inmuebles[indice][propiedad] = editField;
        
      }
      
      this.editField=null;
    }
    
      
  }

 

  imprimirLista(){
    for (var indice = 0; indice < this.inmuebles.length; indice++){
      if(this.inmuebles[indice].Tipo == "Lote"){
        
        console.log(this.inmuebles[indice]);
      }
      console.log(this.inmuebles[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.inmuebles.push(this.inmuebleNuevo[0]);
    
    
    
    

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
