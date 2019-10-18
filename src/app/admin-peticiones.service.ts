//http://25.43.242.78:5465/Help

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {headers: new HttpHeaders({
  'Content-Type': 'application/json'
})};

@Injectable({
  providedIn: 'root'
})
export class AdminPeticionesService {
url = 'http://25.43.242.78:5465/api/';
  constructor(private http: HttpClient) { }

//Inmuebles----------------------------------------------------
  getInmuebles(){
    return this.http.get<any>(this.url + "Inmueble");
  }

  postInmuebles(Inmueble: Array<any>){ // enviar algo a la base
    return this.http.post(this.url + 'Inmueble', Inmueble);
  }

  deleteInmueble(id: string){
    return this.http.delete(this.url + 'Inmueble/?id=' + id );
    }

  putInmueble(id:string, Inmueble:any){
    return this.http.put<any>(this.url + 'Inmueble/' + id, Inmueble,httpOptions);
  }

  

//---------------------------------------------------------------
  //Tipo de Anuncios

  getTipoAnuncio () {
    return this.http.get<any>(this.url + 'Tipo_anuncio');
  }

  deleteTipoAnuncio(nombre:string){
    return this.http.delete(this.url + 'Tipo_anuncio/?id=' + nombre);
  }

  postTipoAnuncio(Tipo_Anuncio: Array<any>){
    return this.http.post(this.url + 'Tipo_anuncio', Tipo_Anuncio);
  }

  //------------------------------------------------------------
  //Perfil de clientes

  getPerfilClientes(){
    return this.http.get<any>(this.url + 'Perfil_cliente');
  }

  deletePerfilCliente(nombre: string){
    return this.http.delete(this.url + 'Perfil_cliente/?id=' + nombre);
  }

  postPerfilCliente(Perfil_cliente: Array<any>){
    return this.http.post(this.url + 'Perfil_cliente', Perfil_cliente);
  }
  //------------------------------------------------------------
  //Perfil ocupaciones


  getOcupaciones(){
    return this.http.get<any>(this.url + 'Ocupacion');
  }

  deleteOcupaciones(id:number){
    return this.http.delete(this.url + 'Ocupacion/' + id);
  }

  postOcupaciones(Ocupacion: Array<any>){
    return this.http.post(this.url + 'Ocupacion',Ocupacion);
  }

  //------------------------------------------------------------
  //Perfil administradores

  getPerfilAdministradores(){
    return this.http.get<any>(this.url + 'Administrador');
  }

  deletePerfilAdministrador(id:number){
    return this.http.delete(this.url + 'Administrador/' + id);
  }

  postPerfilAdministrador(Administrador: Array<any>){
    return this.http.post(this.url + 'Administrador', Administrador);
  }

  //------------------------------------------------------------
  //Perfil Anuncio por aprobar

  getAnuncioPorAprobar(){
    return this.http.get<any>(this.url + 'AprobarAnuncios');
  }

  putAnuncioPorAprobar(id:number, Anuncios:any){
    return this.http.put<any>(this.url + 'AprobarAnuncios/' + id, Anuncios,httpOptions );
  }
}
