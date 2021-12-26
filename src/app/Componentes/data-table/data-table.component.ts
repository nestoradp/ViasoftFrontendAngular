import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Router} from "@angular/router";
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
        let actualstatus = data.body.ListProvinciaStatus[i] as DataModel
        this.LServicioActual.push(actualstatus);
      }
    });
  }




}
