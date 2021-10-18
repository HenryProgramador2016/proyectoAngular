import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'appPrueba';

  constructor(private loadingBar: LoadingBarService,private router:Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.loadingBar.start()
      }else if(event instanceof NavigationEnd){
        this.loadingBar.complete();
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });

  }
//   ngOnInit(){
//     this.loadingBar.start();
//   }
// }
}
