import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PruebaService } from "../services/prueba.service";
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ImageResolver implements Resolve<any> {

    obserable!:any;

    constructor(private readonly activeRoute: ActivatedRoute,private imageService: PruebaService) {
      
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        let farmId=route.params.id;
       console.log("El id es", route.params.id);
      
      /**  this.activeRoute.params.subscribe ((routeParams: any) => { 
          // console.log("El parametro es:",routeParams.get("id"));
        farmId=route.params.id; 
      
	});*/
        return  this.obserable= this.imageService.listarFotos(farmId);
    }
}