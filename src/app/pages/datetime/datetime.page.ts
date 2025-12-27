import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonItem, IonList, IonButton, IonLabel, IonListHeader} from '@ionic/angular/standalone';
import { IonDatetime } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
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
    IonLabel,
    IonListHeader,
    IonDatetime,

    ]
})
export class DatetimePage implements OnInit {

  fechaNaci: Date = new Date();

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event: any) => {
          console.log(event);
        }
      },
      {
        text: 'Adiós',
      }

    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(event: any) {
    console.log(event);
    console.log(new Date(event.detail.value));
  }

}
