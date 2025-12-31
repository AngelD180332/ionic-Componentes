import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { IonMenu, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonIcon } from "@ionic/angular/standalone";
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  alertCircleOutline, 
  albumsOutline, 
  personCircleOutline, 
  squareOutline,
  cardOutline,
  checkboxOutline,
  calendarOutline,
  carOutline,
  gridOutline,
  infiniteOutline,
  enterOutline,
  listOutline,
  ellipsisHorizontalCircleOutline,
  menuOutline,
  arrowUpOutline,
  tabletLandscapeOutline,
  removeOutline,
  refreshOutline,
  searchOutline,
  browsersOutline,
  codeWorkingOutline,
  chevronUpOutline
} from 'ionicons/icons';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [
    CommonModule,
    IonApp,
    IonRouterOutlet, 
    IonContent,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
  ],
})
export class AppComponent implements OnInit {
  componentes: Componente[] = [];

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    // Registrar todos los iconos
    addIcons({ 
      alertCircleOutline, 
      albumsOutline, 
      personCircleOutline, 
      squareOutline, 
      cardOutline, 
      checkboxOutline, 
      calendarOutline,
      carOutline,
      gridOutline,
      infiniteOutline,
      enterOutline,
      listOutline,
      ellipsisHorizontalCircleOutline,
      menuOutline,
      arrowUpOutline,
      tabletLandscapeOutline,
      removeOutline,
      refreshOutline,
      searchOutline,
      browsersOutline,
      codeWorkingOutline,
      chevronUpOutline
    });
  }

  ngOnInit() {
    // Cargar el menú desde el archivo JSON
    this.http.get<Componente[]>('/assets/data/menu-ops.json')
      .subscribe(
        data => {
          this.componentes = data;
        },
        error => {
          console.error('Error al cargar el menú:', error);
        }
      );
  }

  navigateTo(route: string) {
    console.log('Navegando a:', route);
    this.router.navigate([route]);
  }
}