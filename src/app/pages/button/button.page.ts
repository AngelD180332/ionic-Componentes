import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonIcon, IonButtons } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { addIcons } from 'ionicons';
import { star, heart, heartOutline } from 'ionicons/icons';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonIcon, IonButtons]
})
export class ButtonPage implements OnInit {

  favorito: boolean = false;


  constructor() {
    addIcons({ star, heart, 'heart-outline': heartOutline });
   }

  ngOnInit() {
  }
  onClick() {
    this.favorito = !this.favorito;
  }

}
