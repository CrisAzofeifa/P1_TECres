import { Component, OnInit } from '@angular/core';

import { PeticionesService } from '../peticiones.service';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private data:PeticionesService) { }

  ngOnInit() {
  }

  reporteVentas: Array<any> = [
  ];

  

  generarReporteVentas(Finicial, Ffinal){
    var Fi = (<HTMLInputElement>document.getElementById(Finicial));
    var Ff= (<HTMLInputElement>document.getElementById(Ffinal));
    
    this.data.getReporteVentas(Fi.value,Ff.value).subscribe(datos => this.reporteVentas = datos);
    var pdf = new jsPDF();

    console.log(this.reporteVentas.length);
    console.log(this.reporteVentas);

    pdf.setFontStyle("times");
    pdf.setFontSize(30);
    pdf.text(90,20,"TECres");
    pdf.text(70 ,30,"Reporte de Ventas");

    
    var columns = ["Cliente", "Propiedad", "Facturado"];
    var data = [];
    for(var i = 0; i < this.reporteVentas.length ; i++){
      var temp = [];
      temp.push(this.reporteVentas[i].Nombre);
      temp.push(this.reporteVentas[i].Titulo);
      temp.push(this.reporteVentas[i].Monto_Facturado);
      data.push(temp);
    };
     
    pdf.autoTable(columns,data,
    { margin:{ top: 50 }, theme : 'grid'}
    );
   
        
    pdf.save('Reporte de Ventas.pdf');
  }
}
