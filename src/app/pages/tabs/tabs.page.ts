import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonTab, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { Icon } from 'ionicons/dist/types/components/icon/icon';  
import { addIcons } from 'ionicons';

import { personOutline, callOutline, settingsOutline } from 'ionicons/icons';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent, 
    IonTab, IonTabs, IonTabBar, IonTabButton,
    IonLabel,
    IonContent,
    IonIcon
  ]
})
export class TabsPage implements OnInit {

  constructor() { 

    addIcons({ 
      personOutline,
      callOutline,
      settingsOutline 
    });
    }

  ngOnInit() {
  }

}
