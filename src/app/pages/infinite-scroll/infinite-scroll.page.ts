import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonLabel } from '@ionic/angular/standalone';
import { IonInfiniteScroll } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonList, IonItem } from '@ionic/angular/standalone';
import { IonInfiniteScrollContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonInfiniteScroll,
    HeaderComponent,
    IonList,
    IonLabel,
    IonItem,
    IonInfiniteScrollContent,
  ]
})
export class InfiniteScrollPage implements OnInit {

  data: any[] = Array(20);

  @ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;  // ← Agregar el !

  constructor() { }

  ngOnInit() {
  }

  loadData() {
    setTimeout(() => {
      if (this.data.length > 50) {
        if (this.infiniteScroll) {  // ← Verificar que exista
          this.infiniteScroll.complete();
          this.infiniteScroll.disabled = true;
        }
        return;
      }

      const nuevosDatos = Array(20);
      this.data.push(...nuevosDatos);

      if (this.infiniteScroll) {  // ← Verificar que exista
        this.infiniteScroll.complete();
      }
    }, 1500);
  }

}