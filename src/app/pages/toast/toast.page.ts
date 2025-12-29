import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';

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
            HeaderComponent,
          ]
})
export class ToastPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
