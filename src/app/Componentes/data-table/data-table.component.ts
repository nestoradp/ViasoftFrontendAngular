import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Router} from "@angular/router";
import {EstadoServicioByProvinciaModel} from "../../Modelo/EstadoServicioByProvinciaModel";
import {DataModel} from "../../Modelo/DataModel";



@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  LServicioActual: DataModel [];


  constructor(private service: DataService, private router: Router) {
    this.LServicioActual = [];


  }

  ngOnInit(): void {
    this.DevolverListadoServicio();
  }


  DevolverListadoServicio() {
    this.service.DevolverEstadoActual().subscribe(data =>{
      for (let i =0; i<data.body.ListProvinciaStatus.length; i++ ){
      /*  let ListProvincias:DataModel[]=[]
        let ListEstadoServicio:EstadoServicioByProvinciaModel[]=[]
       // ListProvincias.push( data.body.ListProvinciaStatus[i].provincia);
      let  provincia:string =data.body.ListProvinciaStatus[i].provincia;
        let servicios:any[]=data.body.ListProvinciaStatus[i].servicioActualProvinciaList;
        for (let j =0 ;j<servicios.length;j++){
          let estado : EstadoServicioByProvinciaModel = servicios[j] as EstadoServicioByProvinciaModel;
          ListEstadoServicio.push(estado);
        }
        //ListProvincias.push(ListEstadoServicio);
       let actuastatus :DataModel= new DataModel(provincia,ListEstadoServicio);*/
        let actualstatus = data.body.ListProvinciaStatus[i] as DataModel
        console.log(actualstatus)
        this.LServicioActual.push(actualstatus);
      }
      console.log(this.LServicioActual);
    });










  }




}
