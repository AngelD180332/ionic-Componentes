import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonRouterLink,
    RouterLinkActive
  ],
})
export class inicioPage {
  constructor() {}
}