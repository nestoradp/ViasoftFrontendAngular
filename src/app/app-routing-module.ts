 import { NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./Componentes/home/home.component";
import {DataTableComponent} from "./Componentes/data-table/data-table.component";

const routes: Routes=[
  {path: '', component: HomeComponent},
  {path:'List', component:DataTableComponent }
  ];

//export const appRoutingProviders: any[]=[];
//export const routing :ModuleWithProviders<any> = RouterModule.forRoot(AppRoutingModule);

 @NgModule({
   imports:[RouterModule.forRoot(routes)],
   exports:[RouterModule]
 })

 export class AppRoutingModule{}
