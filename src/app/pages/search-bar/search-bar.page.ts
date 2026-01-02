import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IonSearchbar } from '@ionic/angular/standalone';
import { DataService } from 'src/app/services/data.service';
import { FiltroPipe } from 'src/app/pipes/filtro-pipe-module';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.page.html',
  styleUrls: ['./search-bar.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonSearchbar, 
    IonList,
    IonItem,
    IonLabel,
    FiltroPipe
  ]
})
export class SearchBarPage implements OnInit {

  albumes: any[] = [];
  textoBuscar: string = '';

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbumes().subscribe( albumes => {
      console.log(albumes);
      this.albumes = albumes;
    });
  }

  onSearchChange( event: any ){
    //console.log(event);
    this.textoBuscar= event.detail.value;
  }

}
