import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';

@Component({
  selector: 'app-tipo-anuncio',
  templateUrl: './tipo-anuncio.component.html',
  styleUrls: ['./tipo-anuncio.component.css']
})
export class TipoAnuncioComponent implements OnInit {
  tipo_anuncios: Array<any> = [];
  editField: string;
  public valorBusqueda:string;
  constructor(private service: AdminPeticionesService) { }

  ngOnInit() {

    this.service.getTipoAnuncio().subscribe(p => this.tipo_anuncios = p);
    console.log(this.tipo_anuncios);
    
  }

  anuncios: Array<any> = [

    {Tipo: "Normal", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Destacado", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Oro", Descripcion: 'asd', CostoDiario:123},
    {Tipo: "Platino", Descripcion: 'asd', CostoDiario:123}
    
  ]

  tipo_anuncioNuevo:Array<any>= [{nombre: "Default", descripcion: 'Default', costo_diario:0}]

  eliminar(tipo1:string){
    if (tipo1 == 'Normal' || tipo1 == 'Destacado' || tipo1 == 'Oro' || tipo1 == 'Platino'){
      alert('No se puede eliminar este tipo de anuncio pues es DEFAULT.');
    }else {

      this.service.deleteTipoAnuncio(tipo1).subscribe();
      for (var indice = 0; indice < this.tipo_anuncios.length; indice++){
        if(this.tipo_anuncios[indice].nombre == tipo1){
          this.tipo_anuncios.splice(indice, 1);
        }
      }
    }
    
    
  }

  cambiarValor( event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( tipo1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.tipo_anuncios.length; indice++){
      if(this.tipo_anuncios[indice].nombre == tipo1){
        this.tipo_anuncios[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
  }

  imprimirLista(){
    for (var indice = 0; indice < this.tipo_anuncios.length; indice++){
      console.log(this.tipo_anuncios[indice]);
    }
  }

  agregar1(nombre:string){
    this.service.postTipoAnuncio(this.tipo_anuncioNuevo[0]).subscribe();
    this.tipo_anuncioNuevo= [{nombre: "Default", descripcion: 'Default', costo_diario:0}];
    alert('Se pudo agregar con éxito el nuevo tipo de anuncio.');
  }

  agregar(){

    this.imprimirLista();
    this.tipo_anuncios.push(this.tipo_anuncioNuevo[0]);
    //this.tipo_anuncioNuevo = [{nombre: "Default", descripcion: 'Default', costo_diario:0}];
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

