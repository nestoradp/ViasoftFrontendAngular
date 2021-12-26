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
import { ProvinciaComponent } from './Componentes/provincia/provincia.component';
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {NoopAnimationsModule} from "@angular/platform-browser/animations";
import {ButtonModule} from "primeng/button";
import {ProvinciaModel} from "./Modelo/ProvinciaModel";
import {CardModule} from "primeng/card";
import {PanelModule} from "primeng/panel";
import {MessagesModule} from "primeng/messages";
import { ProvinciaAfectadaComponent } from './Componentes/provincia-afectada/provincia-afectada.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DataTableComponent,
    HomeComponent,
    ProvinciaComponent,
    ProvinciaAfectadaComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    TabMenuModule,
    ImageModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    FormsModule,
    NoopAnimationsModule,
    ButtonModule,
    CardModule,
    PanelModule,
    MessagesModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
