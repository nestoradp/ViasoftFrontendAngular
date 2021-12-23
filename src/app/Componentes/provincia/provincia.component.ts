import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Router} from "@angular/router";
import {ProvinciaModel} from "../../Modelo/ProvinciaModel";
import {DataModel} from "../../Modelo/DataModel";

/*interface Provincia{
  name:string,
  uuid:string
}*/

@Component({
  selector: 'app-provincia',
  templateUrl: './provincia.component.html',
  styleUrls: ['./provincia.component.css']
})


export class ProvinciaComponent implements OnInit{
provincias: ProvinciaModel[];
  selectedCityCode: ProvinciaModel |any =null

  lServicioProvncia: DataModel[];

  constructor(private service: DataService, private router:Router) {
    this.provincias=[
     /* {name: "New Yor", uuid:"sddsd"},
      {name: "New Yorss", uuid:"sddsd"},
      {name: "New Yorss33", uuid:"sddssdsd"}*/
      ];
    this.lServicioProvncia=[];
  }



  ngOnInit(): void {
  this.ObtenerProvincias();
  }

  ObtenerProvincias(){
   this.service.DevolverProvincias().subscribe(data=>{
   for(let i =0; i< data.body.length; i++){
     let provincia = data.body[i] as ProvinciaModel
     this.provincias.push(provincia);
   }
   })
  }

HandleBuscar(){
    let id:string =this.selectedCityCode.id;
    this.service.DevolverEstadoPorProvincia(id).subscribe(data=>{
      for (let i =0; i< data.body.Provincia.servicioActualProvinciaList.length; i++){
        let actualstatus = data.body.Provincia as DataModel
         this.lServicioProvncia.push(actualstatus);
      }
    })
     console.log(this.lServicioProvncia);
}

}
