import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-anuncio',
  templateUrl: './tipo-anuncio.component.html',
  styleUrls: ['./tipo-anuncio.component.css']
})
export class TipoAnuncioComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }

  anuncios: Array<any> = [

    {Tipo: "Normal", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Destacado", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Oro", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Platino", Descripcion: 'asd', CostoDiario:123}
    
  ]

  anuncioNuevo:Array<any>= [ {Tipo: "Default", Descripcion: 'Default', CostoDiario:0}]

  eliminar(tipo1:any){
    
    for (var indice = 0; indice < this.anuncios.length; indice++){
      if(this.anuncios[indice].Tipo == tipo1){
        this.anuncios.splice(indice, 1);
      }
    }
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( tipo1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.anuncios.length; indice++){
      if(this.anuncios[indice].Tipo == tipo1){
        this.anuncios[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.anuncios.length; indice++){
      console.log(this.anuncios[indice]);
    }
  }

  agregar(){

    this.imprimirLista();
    this.anuncios.push(this.anuncioNuevo[0]);
    this.anuncioNuevo = [ {Tipo: "Default", Descripcion: 'Default', CostoDiario:0}];
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
