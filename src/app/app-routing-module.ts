 import { NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./Componentes/home/home.component";
import {DataTableComponent} from "./Componentes/data-table/data-table.component";
 import {ProvinciaComponent} from "./Componentes/provincia/provincia.component";
 import {ProvinciaAfectadaComponent} from "./Componentes/provincia-afectada/provincia-afectada.component";

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'List', component:DataTableComponent },
  {path:'province', component: ProvinciaComponent},
  {path:'provinceAffect', component: ProvinciaAfectadaComponent}
 ]
//export const appRoutingProviders: any[]=[];
//export const routing :ModuleWithProviders<any> = RouterModule.forRoot(AppRoutingModule);

 @NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
 })

 export class AppRoutingModule{}
