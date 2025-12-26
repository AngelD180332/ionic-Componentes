import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component"; // ← Importar directamente
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, CommonModule, FormsModule, HeaderComponent]
})
export class AlertPage implements OnInit {

  constructor(private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  goToInicio() {
    console.log('Navegando a /inicio...');
    this.router.navigate(['/inicio']);
  }

  goBack() {
    console.log('Regresando atrás...');
    window.history.back();
  }
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['OK'],
    });

    await alert.present();
    }

  async presentAlertMultiple() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            console.log('Click en OK');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'rojo',
          handler: () => {
            console.log('Click en Cancelar');
          }
        }
        
        ]
    });

    await alert.present();
    }


  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, 
      header: 'Prompt!',
      inputs: [
        { name: 'nombre1', type: 'text', placeholder: 'Nombre 1' },
        { name: 'nombre2', type: 'text', id: 'nombre2-id', value: 'hello', placeholder: 'Nombre 2' },
        { name: 'paragraph', type: 'textarea', placeholder: 'Nombre 3' , max: 8, min: 2},
        { name: 'nombre3', type: 'url', value: 'http://ionicframework.com', placeholder: 'Nombre 4' },
        { name: 'nombre4', type: 'date', min: '2020-01-01', max: '2025-12-31' },
        { name: 'nombre5', type: 'number', min: -5, max: 10 },
        { name: 'nombre6', type: 'password', placeholder: 'Nombre 6', cssClass: 'rojo', attributes: { maxlength: 4, inputmode: 'decimal' } }       
      ],
      buttons: [
        { text: 'Cancel', role: 'cancel', cssClass: 'rojo', handler: () => {
            console.log('Confirm Cancel');
          } },
        { text: 'Ok', handler: (data:any) => {
            console.log('Confirm Ok', data);
            
          } }
      ]
    });
    await alert.present();
  }
}