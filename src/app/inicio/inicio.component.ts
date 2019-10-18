import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../peticiones.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  propiedades:Array<any>=[];
  
  constructor(private data:PeticionesService) {
  
    
    
    
  }
  

  ngOnInit() {
  }

}
