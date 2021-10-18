import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Imagen } from 'src/app/model/Imagen';
import { PruebaService } from 'src/app/services/prueba.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  lista!:Imagen[];
  suscription!:Subscription;
  constructor(private route: ActivatedRoute,private prService:PruebaService) { }

  ngOnInit(): void {
    
    console.log("LISTA INICIAL",this.lista);
 this.route.params.subscribe(() => {
    this.lista=this.route.snapshot.data['data']; 
   
    this.lista.map((s:Imagen)=>{
      console.log("imagen descargar ",s.image);
      if(s.image === null){
        s.image=s.url;
      }
    })
  });
  console.log("LISTA FINALIZADA",this.lista);


    
  }

  // ngOnDestroy(){
  //   this.suscription.unsubscribe();
  // }

}
