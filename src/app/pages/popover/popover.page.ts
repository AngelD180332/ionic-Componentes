import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonIcon, IonFooter } from '@ionic/angular/standalone';

import { HeaderComponent } from 'src/app/components/header/header.component';
import { PopoverController } from '@ionic/angular/standalone';
import { PopoverInfoComponent } from '../../components/popover-info/popover-info.component';
import { from } from 'rxjs';

import { addIcons } from 'ionicons';
import { personOutline } from 'ionicons/icons';


@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    CommonModule,
    FormsModule,
    HeaderComponent, IonBackButton,
    IonButtons,
    IonFooter,
    IonIcon, 
  ]
})
export class PopoverPage implements OnInit {

  constructor( private popoverCtrl: PopoverController) { 
    addIcons({
     personOutline
  });

  }

  ngOnInit() {
  }

  async presentPopover( ev: any){
    const popover = await this.popoverCtrl.create({
      component: PopoverInfoComponent,
      event: ev,
      translucent: true,
      backdropDismiss: false
    });
    return await popover.present();
  }

}
