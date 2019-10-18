import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {
  activado: boolean = false;
  anuncio:Array<any>=[];
  mensaje: any={emisor: '',receptor: '', contenido:''};
  id:number;
  prueba:Array<any>=[];
  


  
  constructor(private data:PeticionesService, private ruta:ActivatedRoute ) {
       this.ruta.params.subscribe(params =>{
      console.log('CARGANDO ANUNCIO: ' +params['id'])
      this.get_anuncio(params['id']);
    }
      
    );
   }
   cargar(event){
    
    this.anuncio = this.data.get_anuncio();
  }

   enviar(){
    console.log(this.mensaje);
   }
   get_anuncio(id:number){
    this.data.getAnuncio(id).subscribe(datos => this.anuncio= datos);
    console.log('EL ANUNCIO OBTENIDO ES: ' + this.anuncio )
 }

  ngOnInit() {
    this.data.getAnuncio(87623).subscribe(datos => this.anuncio= datos);
    console.log('EL ANUNCIO OBTENIDO ES: ' + this.anuncio )
  
  }

  
 


}

