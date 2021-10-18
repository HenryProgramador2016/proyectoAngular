import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen } from '../model/Imagen';
@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  private urlEndPoint: string = 'http://localhost:9898/images';


  constructor(private http:HttpClient) { }

  subirFoto(obj:Imagen): Observable<HttpEvent<{}>> {
    console.log("el archivoe es :",obj.imagen);
    let formData = new FormData();
    formData.append("imageFile", obj.imagen);
    formData.append("nombre", obj.name);
    formData.append("descripcion", obj.descripcion);
    formData.append("tipo", obj.tipo);
    //formData.append("id", id);

    const req = new HttpRequest('POST', `${this.urlEndPoint}/upload`, formData, {
      reportProgress: true
    });

    return this.http.request(req);

  }

  listarFotos(id:string){


    return this.http.get<Imagen>(`${this.urlEndPoint}/files/${id}`);
  }

  listarFotosMejorado(id:string){


    return this.http.get<Imagen>(`${this.urlEndPoint}/images/${id}`);
  }

}
