import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, IonItem, IonLabel,  } from '@ionic/angular/standalone';
import { IonicModule } from "@ionic/angular";





@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
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
    IonLabel, IonicModule]
})
export class ListPage implements OnInit {

usuarios: Observable<any> = new Observable();

  constructor( private dataService: DataService ) { }

  ngOnInit() {

    this.usuarios = this.dataService.getUsuarios();

  }

  favorite( user: any ) {
    console.log('favorite', user);
  }
  share( user: any ) {
    console.log('share', user);
  }
}