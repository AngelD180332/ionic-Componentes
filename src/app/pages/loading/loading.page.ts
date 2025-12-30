import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { LoadingController} from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
  standalone: true,
  imports: [IonContent, 
            IonHeader, 
            IonTitle, 
            IonToolbar,
            IonButton, 
            CommonModule, 
            FormsModule,
            HeaderComponent,
          ]
})
export class LoadingPage implements OnInit {

  loading!: HTMLIonLoadingElement;

  constructor( private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  mostrarLoading(){
    this.presentLoading('Cargando...');

    setTimeout(() =>{
      this.loading.dismiss();
    }, 2000)
  }

  async presentLoading( message: string){
    this.loading = await this.loadingCtrl.create({
      message,
    });
    await this.loading.present();

  }


}
