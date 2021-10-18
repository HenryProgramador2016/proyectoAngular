import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ImageLoadingComponent } from './components/image-loading/image-loading.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    GalleryComponent,
    RegistroComponent,
    ImageLoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    LoadingBarModule,

    HttpClientModule,
    NgxSkeletonLoaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
