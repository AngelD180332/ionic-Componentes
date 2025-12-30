import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';

import { HttpClient } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonList,IonItem } from "@ionic/angular/standalone";



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp,
            IonRouterOutlet, 
            IonContent,
            IonMenu,
            IonHeader,
            IonToolbar,
            IonTitle,
            IonList,
            IonItem,
          ],
})
export class AppComponent {
  constructor() {}
}
