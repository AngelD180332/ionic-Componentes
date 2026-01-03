import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { NavController } from '@ionic/angular';
import { register } from 'swiper/element/bundle';

register(); 

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    HeaderComponent,
    IonCardHeader,
    IonCardContent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SlidesPage implements OnInit {
  ngOnInit() {}

  slides: { img: string, titulo: string, desc: string}[] = [
    {
      img: '/assets/slides/photos.svg',
      titulo: 'Comparte Fotos',
      desc: 'Mira y comparte fotos'
    },
    {
      img: '/assets/slides/music-player-2.svg',
      titulo: 'Escucha Musica',
      desc: 'Toda tu musica aqui'
    },
    {
      img: '/assets/slides/calendar.svg',
      titulo: 'Nunca olvides nada',
      desc: 'Calendario a tu disposicion'
    },
    {
      img: '/assets/slides/placeholder-1.svg',
      titulo: 'Tu ubicacion',
      desc: 'Sabemos donde estas'
    }
  ];

  onClick(){
    this.navCtrl.navigateBack('/')
  }

  constructor(private navCtrl: NavController){}


}
