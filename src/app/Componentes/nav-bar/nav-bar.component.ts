import { Component, OnInit } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 items: MenuItem[];
 activeItem: MenuItem | any


  constructor() {
   this.items =[]
  }

  ngOnInit(): void {
    this.items = [
      {label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink:['']},
      {label: 'Listado', icon: 'pi pi-fw pi-calendar', routerLink:['List']},
      {label: 'Provincia', icon: 'pi pi-fw pi-pencil'},
      {label: 'Documentation', icon: 'pi pi-fw pi-file'},
      {label: 'Settings', icon: 'pi pi-fw pi-cog'}
    ];
     this.activeItem = this.items[0];
  }

}
