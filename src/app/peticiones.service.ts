import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {headers: new HttpHeaders({
  'Content-Type': 'application/json'
})};

@Injectable({
  providedIn: 'root'
})
export class PeticionesService {
  propiedades:Array<any>=[]; 
  fotos_principales:Array<any>=[];
  fotos_secundarias:Array<any>=[];

  anuncio:Array<any>=[];

   temp;

  ID= 'http://25.43.242.78'
  appUrlGeneral = this.ID + ':5467/api';
  appUrlCliente = this.ID + ':5466/api';
  appUrlAdmin = this.ID + ':5465/api';
  
  constructor(private _http: HttpClient) {
    
   }
  get_anuncio(){
    return this.anuncio;
  }

  set_anuncio(id:number){
    this.getAnuncio(id).subscribe(datos => this.anuncio= datos);
 }
 
  getAnuncios(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Anuncios');
  }
  getAnuncio(id_propiedad: number){
    return this._http.get<void[]>(this.appUrlGeneral+'/Anuncios/' +id_propiedad);
   
  }
  
   getCantones(provincia:string ){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia);
  }
  getFCantones(provincia:string ){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia);
  }
  getCAnuncios(id:number){
    return this._http.get<void[]>(this.appUrlCliente+ '/Propiedad/Anuncios/?cedula='+id);
  }
  getCPropiedades(id:number){
    return this._http.get<void[]>(this.appUrlCliente+'/Propiedad/Propiedades/?cedula='+id);
  }
  getCliente(correo:string){
    return this._http.get<void[]>(this.appUrlCliente+'/Cliente/User/?correo=' + correo);
  }
  getDistritos(provincia:string,  canton:string){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion/?Provincia='+provincia+'&Canton='+canton );
  }
  getFotoP(url:string){
    console.log(this.appUrlGeneral+'/Image/?Rute='+url);
    return this._http.get<void[]>(this.appUrlGeneral+'/Image/?Rute='+url );
  }
  getTipoAnuncio(){
    return this._http.get<void[]>(this.appUrlAdmin+'/Tipo_anuncio');
   
  }

  getFiltros(filtro:any){
    return this._http.get<void[]>(this.appUrlGeneral+'Anuncios/Filtrar?habitaciones='+
    filtro.habitaciones+'&preciomin='+filtro.preciomin+'&preciomax='+filtro.preciomax+'id_ubicacion='+filtro.id);
  }
  gettest(){
    return this._http.get<void[]>('http://25.43.242.78:5466/api/Propiedad/Anuncios/?cedula=87623');
  };

  
 
  getGentilicios(){
    return this._http.get<void[]>(this.appUrlCliente+'/Nacionalidad' );
  }

  getPerfiles(){
    return this._http.get<void[]>(this.appUrlCliente+'/Perfil_cliente');
  }
  
  getOcupaciones(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ocupacion');
  }
  getProvincias(){
    return this._http.get<void[]>(this.appUrlGeneral+'/Ubicacion');
  }
 
  addCliente(usuarios:void){
    return this._http.post<any>(this.appUrlCliente+'/Cliente',usuarios)
 }
 addAnuncio(usuarios:Array<any>){
  return this._http.post<any>(this.appUrlGeneral+'/Anuncios',usuarios)
}
 
  addInteresado(usuarios:void){
      return this._http.post<any>(this.appUrlGeneral+'/Interesado',usuarios)
  }

  login(correo:string, pass:string) {
    return this._http.get(this.appUrlCliente+'/Cliente/login/?correo='+correo+'&pass='+pass);     
  }


  getUser(){
    return this._http.get<void[]>(this.appUrlCliente);
  }
  
  addUser(usuarios:void){
    return this._http.post<any>(this.appUrlGeneral,usuarios)
  }
  updateUser(usuarios:any,id){
    return this._http.put<any>(this.appUrlGeneral+"/"+id.toString(), usuarios, httpOptions)
  }
  getUbicaciones(){
    return this._http.get<void[]>(this.appUrlAdmin+'/Ubicacion/Ubicaciones');
  }
  
  deleteUbicacion(id : number){
    return this._http.delete<any>(this.appUrlAdmin+'/Ubicacion/'+id.toString(),httpOptions);
  }

  addUbicacion(Ubicacion : any){
    return this._http.post<any>(this.appUrlAdmin+'/Ubicacion' , Ubicacion, httpOptions);
  }

  getVendedores(){
    return this._http.get<void[]>(this.appUrlAdmin+'/Vendedor/Vendedores');
  } 

  addVendedor(Vendedor : any){
    return this._http.post<any>(this.appUrlAdmin+'/Vendedor', Vendedor, httpOptions);
  }

    
  deleteVendedor(id){
    return this._http.delete<any>(this.appUrlAdmin+'/Vendedor/'+id.toString(),httpOptions);
  }

  modificarVendedor(id, Vendedor : any){
    return this._http.put<any>(this.appUrlAdmin+'/Vendedor/'+id.toString(),Vendedor,httpOptions);
  }

  modificarUbicaciones(id, Ubicacion : any){
    return this._http.put<any>(this.appUrlAdmin+'/Ubicacion/'+id.toString(),Ubicacion,httpOptions);
  }

  getReporteVentas(Fi,Ff){
    return this._http.get<void[]>(this.appUrlAdmin+'/Reportes/Ventas?inicio='+Fi+"&fin="+Ff);
  }
}
