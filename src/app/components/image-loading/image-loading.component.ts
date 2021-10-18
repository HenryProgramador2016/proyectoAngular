import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-image-loading',
  templateUrl: './image-loading.component.html',
  styles: [
  ]
})
export class ImageLoadingComponent implements OnInit {

  @Input() image:any="";

  
  isLoading!:boolean;
  constructor(private _sanitizer: DomSanitizer) { 
    this.isLoading=true;
    this.image= this._sanitizer.bypassSecurityTrustResourceUrl(`${this.image}`);
  }

  hideLoader(){
    this.isLoading=false;
  }
  ngOnInit(): void {
  }

}
