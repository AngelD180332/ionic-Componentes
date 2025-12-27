import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem } from '@ionic/angular/standalone';
import { HeaderComponent } from "src/app/components/header/header.component";
import { ComponentsModule } from 'src/app/components/components-module';
import { IonCard, IonCardContent, IonCardTitle, IonCardSubtitle, IonCardHeader } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";
@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    ComponentsModule,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader, IonicModule,
    IonItem
  ]
})
export class CardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
