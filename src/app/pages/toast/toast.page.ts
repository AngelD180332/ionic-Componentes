import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import {ToastCon}


@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent, IonButton]
})
export class ToastPage implements OnInit {

  constructor( private toastCtrl: ToastController) { }

  ngOnInit() {
  }
  async presentToast(){
    const toast = await this.toastCtrl.create({
      message: 'Your settings have seen saved',
      duration: 2000
    });
  }

    async presentToastingWithOpcions(){
    const toast = await this.toastCtrl.create({
      header: 'Toast header',
      message: 'Click to close',
      position:'top',
      buttons:{
        side: 'start',
        icon: 'star',
        text: 'Favorite',
        handler:() => {
          console.log('Favorite clicked');
        }
        }, {
          text:'Done',
          role:'Cancel',
          handler:() => {
            console.log('Cancel clicked');
          }
        }
    });
  }


}
