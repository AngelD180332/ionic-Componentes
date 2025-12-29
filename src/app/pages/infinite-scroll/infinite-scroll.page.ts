import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonInfiniteScroll } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar, 
            CommonModule, 
            FormsModule,
            IonInfiniteScroll,
            HeaderComponent,
          ]
})
export class InfiniteScrollPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
