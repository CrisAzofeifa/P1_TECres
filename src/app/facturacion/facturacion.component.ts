import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facturacion',
  templateUrl: './facturacion.component.html',
  styleUrls: ['./facturacion.component.css']
})
export class FacturacionComponent implements OnInit {
  editField: string;
  public valorBusqueda:string;
  constructor() { }

  ngOnInit() {
  }
  prefacturas: Array<any> = [

    {IDAnuncio: 1, NombreAnuncio: 'Anuncio 1', Monto:123},
    {IDAnuncio: 2, NombreAnuncio: 'Anuncio 2', Monto:123},
    {IDAnuncio: 3, NombreAnuncio: 'Anuncio 3', Monto:123}
    
  ]

  actualizarLista( id1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);

    for (var indice = 0; indice < this.prefacturas.length; indice++){
      if(this.prefacturas[indice].IDAnuncio == id1){
        this.prefacturas[indice][propiedad] = editField;
        
      }
      this.editField=null;
    }
      
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
