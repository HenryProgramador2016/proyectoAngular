import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ImageResolver } from './resolves/image.resolve';
import { ImageMejoradoResolver } from './resolves/imageMejorado.resolve';

const routes:Routes=[
  {
   path:"",
    component:RegistroComponent
  },
  {
    path:"gallery/:id",
    component:GalleryComponent,
    resolve:{data:ImageResolver},
    
   },
  //  {
  //   path:"gallery2/:id",
  //    component:GalleryComponent,
  //    resolve:{data:ImageResolver},
  //  },
  //  {
  //   path:"gallery3/:id",
  //    component:GalleryComponent,
  //    resolve:{data:ImageResolver},
  //  },
   //URL MEJORADAS
   {
    path:"gallerym/:id",
     component:GalleryComponent,
     resolve:{data:ImageMejoradoResolver},
   },
  //  {
  //   path:"gallery2m/:id",
  //    component:GalleryComponent,
  //    resolve:{data:ImageMejoradoResolver},
  //  },
  //  {
  //   path:"gallery3m/:id",
  //    component:GalleryComponent,
  //    resolve:{data:ImageMejoradoResolver},
  //  }


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
