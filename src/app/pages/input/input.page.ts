import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonInput, IonList, IonListHeader, IonLabel, IonItem, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonInput,
    IonList,
    IonListHeader,
    IonLabel,
    IonItem,
    IonButton,
  
  ]
})
export class InputPage implements OnInit {

  nombre: string = 'Capibara';
  usuario: any = {
    email: '',
    password: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log('submit');
    console.log(this.usuario);
    console.log(formulario);
  }

}
