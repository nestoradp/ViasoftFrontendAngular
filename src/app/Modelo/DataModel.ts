import {EstadoServicioByProvinciaModel} from "./EstadoServicioByProvinciaModel";

export class DataModel{
  provincia :string
  ListadoServicio:EstadoServicioByProvinciaModel[]=[]
  constructor(provincia :string, ListadoServicio:EstadoServicioByProvinciaModel[]) {
    this.provincia=provincia;
    this.ListadoServicio=ListadoServicio
  }
}
