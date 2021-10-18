import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { GalleryComponent } from '../gallery/gallery.component';
import { RegistroComponent } from '../registro/registro.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  mostrar(){
    alert("mostrar mensaje");
  }

}
