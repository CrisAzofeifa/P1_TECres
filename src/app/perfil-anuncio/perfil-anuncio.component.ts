import { Component, OnInit } from '@angular/core';
import {AdminPeticionesService} from '../admin-peticiones.service';
@Component({
  selector: 'app-perfil-anuncio',
  templateUrl: './perfil-anuncio.component.html',
  styleUrls: ['./perfil-anuncio.component.css']
})
export class PerfilAnuncioComponent implements OnInit {
  editField: string = '';
  campo: string;
  anunciosPorAprobar: Array<any> = [];
  public valorBusqueda:string;

  constructor(private service: AdminPeticionesService) { }

  ngOnInit() {
    this.service.getAnuncioPorAprobar().subscribe(p => this.anunciosPorAprobar = p);
    console.log(this.anunciosPorAprobar);
    //var p = {modalidad:"DEFAULT", inicio: "0001-01-01",fin: "0001-01-01",tarjeta_credito: "0000000",titulo: "DEFAULT",visitas: 0,vendedor: 1, aprobado_por: 1,publico: 1,tipo_anuncio: "DEFAULT", id_cliente: 0,id_propiedad: 1, precio: 0};
    //this.service.putAnuncioPorAprobar(1,p).subscribe();
  
  }

  anuncioNuevoPorAprobar:Array<any> = [{
    modalidad: "DEAFAULT",
    inicio: "0001-01-01",
    fin: "0001-01-01",
    tarjeta_credito: "0000000",
    titulo: "DEFAULT",
    visitas: 0,
    vendedor: 1,
    aprobado_por: null,
    publico: 1,
    tipo_anuncio: "DEFAULT",
    id_cliente: 0,
    id_propiedad: 0,
    precio: 2100000
    }];


  

  cambiarValor(event:any){
    this.editField = event.target.textContent;
  }

  actualizarLista( Tipo1:any, propiedad: any, event: any){

    const editField = event.target.textContent;
    console.log(editField);
    
    for (var indice = 0; indice < this.anunciosPorAprobar.length; indice++){
      if(this.anunciosPorAprobar[indice].id_propiedad == Tipo1){
        this.anunciosPorAprobar[indice][propiedad] = editField;
        this.aprobar(this.anunciosPorAprobar[indice].id_propiedad,this.anunciosPorAprobar[indice].aprobado_por);
      }
      
      this.editField=null;
    }
  }

  imprimirLista(){
    for (var indice = 0; indice < this.anunciosPorAprobar.length; indice++){
      if(this.anunciosPorAprobar[indice].Tipo == "Lote"){
        
        console.log(this.anunciosPorAprobar[indice]);
      }
      console.log(this.anunciosPorAprobar[indice]);
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


  aprobar(idPropiedad:any,idAdmin:number){
    
    for (var indice = 0; indice < this.anunciosPorAprobar.length; indice++){
      if(this.anunciosPorAprobar[indice].id_propiedad == idPropiedad){
        this.anuncioNuevoPorAprobar[0].id_porpiedad = this.anunciosPorAprobar[indice].id_propiedad;
        this.anuncioNuevoPorAprobar[0].modalidad = this.anunciosPorAprobar[indice].modalidad;
        this.anuncioNuevoPorAprobar[0].inicio = this.anunciosPorAprobar[indice].inicio;
        this.anuncioNuevoPorAprobar[0].fin = this.anunciosPorAprobar[indice].fin;
        this.anuncioNuevoPorAprobar[0].tarjeta_credito = this.anunciosPorAprobar[indice].tarjeta_credito;
        this.anuncioNuevoPorAprobar[0].titulo = this.anunciosPorAprobar[indice].titulo;
        this.anuncioNuevoPorAprobar[0].visitas = this.anunciosPorAprobar[indice].visitas;
        this.anuncioNuevoPorAprobar[0].vendedor = this.anunciosPorAprobar[indice].vendedor;
        this.anuncioNuevoPorAprobar[0].aprobado_por = idAdmin;
        this.anuncioNuevoPorAprobar[0].publico = this.anunciosPorAprobar[indice].publico;
        this.anuncioNuevoPorAprobar[0].tipo_anuncio = this.anunciosPorAprobar[indice].tipo_anuncio;
        this.anuncioNuevoPorAprobar[0].id_cliente = this.anunciosPorAprobar[indice].id_cliente;
        this.anuncioNuevoPorAprobar[0].id_propiedad = this.anunciosPorAprobar[indice].id_propiedad;
        this.anuncioNuevoPorAprobar[0].precio = this.anunciosPorAprobar[indice].precio;
        this.service.putAnuncioPorAprobar(idPropiedad,this.anuncioNuevoPorAprobar[0]).subscribe();
        
        this.anunciosPorAprobar.splice(indice, 1);
        this.anuncioNuevoPorAprobar = [{ modalidad: "DEAFAULT", inicio: "0001-01-01",fin: "0001-01-01",tarjeta_credito: "0000000",titulo: "DEFAULT",visitas: 0,vendedor: 1, aprobado_por: null,publico: 1,tipo_anuncio: "DEFAULT", id_cliente: 0,id_propiedad: 0, precio: 0}];
      }
    }

   }


    
    /*for (var indice = 0; indice < this.anunciosPorAprobar.length; indice++){
      if(this.anunciosPorAprobar[indice].Titulo == idPropiedad){
        this.anunciosPorAprobar[indice].Publico = 'Sí';
      }
      
    }*/

  }

