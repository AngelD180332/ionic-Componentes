import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonIcon, IonItem, IonRange } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonProgressBar } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { sunny } from 'ionicons/icons';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonList,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonProgressBar,
    IonIcon, 
    IonItem,
    IonRange
    ]
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.05;

  constructor() {
    addIcons({
     sunny
  });
   }

  ngOnInit() {
  }

  rangeChange(event: any){
    this.porcentaje=event.detail.value/100;
  }

}
