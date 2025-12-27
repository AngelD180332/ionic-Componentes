import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonCheckbox } from '@ionic/angular/standalone';
import { IonItem, IonList, IonButton, IonLabel} from '@ionic/angular/standalone';
import { IonButtons } from '@ionic/angular/standalone';


@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonCheckbox,
    IonItem,
    IonList,
    IonButton,
    IonButtons,
    IonLabel
  ]
})
export class CheckboxPage implements OnInit {

data = [
    { 
      name: 'primary',
      selected: false
    },
    { 
      name: 'secondary',
      selected: true
    },
    { 
      name: 'tertiary',
      selected: false
    },
    {
      name: 'success',
      selected: true
    }
]


  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }
  verData(){
      console.log(this.data);
  }
}