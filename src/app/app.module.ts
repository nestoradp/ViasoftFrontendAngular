import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './Componentes/nav-bar/nav-bar.component';
import {TabMenuModule} from "primeng/tabmenu";
import {ImageModule} from "primeng/image";
import { DataTableComponent } from './Componentes/data-table/data-table.component';
import { HomeComponent } from './Componentes/home/home.component';
import {AppRoutingModule} from "./app-routing-module";
import {TableModule} from "primeng/table";
import {DataService} from "./Service/data.service";
import {HttpClientModule} from "@angular/common/http";

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataTableComponent,
    HomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabMenuModule,
    ImageModule,
    TableModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
