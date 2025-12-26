import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonAccordion, IonAvatar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from "../../components/header/header.component"; // ← Importar directamente

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule, 
    HeaderComponent, 
    IonAccordion, 
    IonAvatar, 
    ]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  goBack() {
    console.log('Regresando atrás...');
    window.history.back();
  }

}
