import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, 
            IonRouterOutlet,
  
  ],
})
export class AppComponent {
  constructor() {}
}
