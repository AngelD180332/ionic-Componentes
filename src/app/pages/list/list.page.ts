import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonListHeader } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';
import { IonList, IonItem, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon } from '@ionic/angular/standalone';
import { heartOutline, shareOutline, closeOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonIcon,
  ]
})
export class ListPage implements OnInit {

usuarios: Observable<any> = new Observable();

@ViewChild(IonList) ionList!: IonList;

  constructor( private dataService: DataService ) {
    addIcons({ 'heart-outline': heartOutline, 
              'share-outline': shareOutline,
              'close-outline': closeOutline, 
              'trash-outline':trashOutline });

   }

  ngOnInit() {
    this.usuarios = this.dataService.getUsuarios();
  }

  favorite(usuario: any, sliding: IonItemSliding) {
    sliding.close();
    (document.activeElement as HTMLElement)?.blur();
    console.log('favorite', usuario);
    this.ionList.closeSlidingItems();
  }

  share(usuario: any, sliding: IonItemSliding) {
    sliding.close();
    (document.activeElement as HTMLElement)?.blur();
    console.log('share', usuario);
    this.ionList.closeSlidingItems();
  }

  delete(usuario: any, sliding: IonItemSliding) {
    sliding.close();
    (document.activeElement as HTMLElement)?.blur();
    console.log('delete', usuario.name);
    this.ionList.closeSlidingItems();

  }  
}