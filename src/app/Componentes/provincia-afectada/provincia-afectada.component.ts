import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-provincia-afectada',
  templateUrl: './provincia-afectada.component.html',
  styleUrls: ['./provincia-afectada.component.css']
})
export class ProvinciaAfectadaComponent implements OnInit {
  provincia: string| null=null;
  tiempoAfectado:number=-1;


  constructor(private service:DataService, private router:Router) { }

  ngOnInit(): void {
    this.ProvinciaAfectada();
  }


  ProvinciaAfectada(){
    this.service.DevolverProvinciaMasAfectada().subscribe(data=>{
      this.provincia = data.body.provincia;
      this.tiempoAfectado= data.body.tiempoAfectado;
    })
  }




}
