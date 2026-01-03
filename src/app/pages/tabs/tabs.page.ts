import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonTab, IonTabs, IonTabButton, IonTabBar, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { personOutline, callOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonTabs, 
    IonTabBar, 
    IonTabButton,
    IonLabel,
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