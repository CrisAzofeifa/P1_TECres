import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inmueble',
  templateUrl: './inmueble.component.html',
  styleUrls: ['./inmueble.component.css']
})
export class InmuebleComponent implements OnInit {
  editField: string;
  campo: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }
  inmuebles: Array<any> = [

    {Tipo: 'Lote', cedulaAdmin:123},
    {Tipo: "Casa", cedulaAdmin:123},
    {Tipo: "Apartamento", cedulaAdmin:123},
   
  ]

  inmuebleNuevo:Array<any>= [{Tipo:'Default', cedulaAdmin: 0}]

  eliminar(Tipo1:any){
    
    for (var indice = 0; indice < this.inmuebles.length; indice++){
      if(this.inmuebles[indice].Tipo == Tipo1){
        this.inmuebles.splice(indice, 1);
      }
    }
    
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
    this.inmuebleNuevo = [{Tipo:'Default', cedulaAdmin: 0}];
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
