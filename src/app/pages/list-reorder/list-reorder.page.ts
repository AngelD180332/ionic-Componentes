import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonButton } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonReorderGroup, IonItem, IonLabel, IonReorder,IonButtons} from '@ionic/angular/standalone';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonReorder,
    IonReorderGroup,
    IonList,
    IonItem, IonLabel, IonButton, IonButtons]
})
export class ListReorderPage implements OnInit {

  personajes: string[]= ['Capibara','Marmota','Hamster','Cuyo','Hipopotamo']

  reorderDisabled: boolean= true;
  constructor() { }

  ngOnInit() {
  }

  doReorder(event: any){
    console.log(event);

    const itemMover= this.personajes.splice(event.detail.from,1)[0];
    this.personajes.splice(event.detail.to,0, itemMover);

    event.detail.complete();
    console.log(this.personajes);
  }
}
