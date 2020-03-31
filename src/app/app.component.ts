import { Component } from '@angular/core';
import {NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'eoacsite';

  count = 0;
  previousUrl = '';

  constructor(router: Router) {

      router.events.forEach((event) => {
        if (event instanceof NavigationEnd) {


          console.log(this.previousUrl);
          console.log(router.routerState.snapshot.url);

            // window.location.href = event.url;
            this.previousUrl = event.url;

        }
      });
    }


}
