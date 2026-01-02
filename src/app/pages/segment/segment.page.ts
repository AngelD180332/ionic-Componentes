import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonSegment, IonSegmentButton, IonLabel, IonList, IonItem} from '@ionic/angular/standalone';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';

import {
  home,
  heart,
  pin,
  star,
  call,
  globe,
  basket,
  barbell,
  trash,
  person
} from 'ionicons/icons';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonIcon,
    IonBackButton,
    IonButtons,
    IonList,
    IonItem
  ]
})
export class SegmentPage implements OnInit {

  superHeroes!: Observable<any>;

  constructor(private dataService: DataService) { 
        addIcons({
      home,
      heart,
      pin,
      star,
      call,
      globe,
      basket,
      barbell,
      trash,
      person
    });
   }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }

  segmentChanged( event:any ){
    console.log(event)
  }

}
