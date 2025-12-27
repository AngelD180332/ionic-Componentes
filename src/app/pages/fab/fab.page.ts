import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, IonFab } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonList,IonItem,IonLabel } from "@ionic/angular/standalone";
import { IonFabButton, IonIcon, IonFabList } from '@ionic/angular/standalone';


@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonList,
    IonItem,
    IonLabel, IonFooter, IonFab,
    IonFabButton,
    IonIcon,
    IonFabList
    ]
})
export class FabPage implements OnInit {

  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
