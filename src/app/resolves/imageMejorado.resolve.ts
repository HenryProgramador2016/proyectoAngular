import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { Observable } from "rxjs";
import { PruebaService } from "../services/prueba.service";
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ImageMejoradoResolver implements Resolve<any> {

    constructor(private readonly route: ActivatedRoute,private router: Router, private imageService: PruebaService) {
    }

    public resolve(route: ActivatedRouteSnapshot): Observable<any> {
        //let farmId = route.paramMap.get('id')!; 

        let farmId=route.params.id;
        return this.imageService.listarFotosMejorado(farmId);
    }
}