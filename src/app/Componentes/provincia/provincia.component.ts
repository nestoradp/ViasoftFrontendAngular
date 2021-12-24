import { Component, OnInit } from '@angular/core';
import {DataService} from "../../Service/data.service";
import {Router} from "@angular/router";
import {ProvinciaModel} from "../../Modelo/ProvinciaModel";
import {DataModel} from "../../Modelo/DataModel";
import {EstadoServicioByProvinciaModel} from "../../Modelo/EstadoServicioByProvinciaModel";

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

  lServicioProvncia: any[];
  NameProvincia:string="";

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
     this.NameProvincia= data.body.Provincia.provincia;
     console.log(data.body)
      for(let i=0;i<data.body.Provincia.servicioActualProvinciaList.length; i+=8){
      let arreglo:any []=[];
      for(let j=i;j<8+i;j++){
     let actualstatus = data.body.Provincia.servicioActualProvinciaList[j] as EstadoServicioByProvinciaModel
       arreglo.push(actualstatus);}
        this.lServicioProvncia.push(arreglo);}
  console.log(this.lServicioProvncia);
    })

}

}
