import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonRouterLink,
  IonList,
  IonItem,
  IonIcon
} from '@ionic/angular/standalone';
import { RouterLinkActive, Router } from "@angular/router";
import { addIcons } from 'ionicons';
import { alertCircleOutline, 
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
import { MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonRouterLink,
    RouterLinkActive,
    IonList,
    IonItem,
  ],
})
export class inicioPage implements OnInit {
  componentes: Componente[] = [];

  constructor(
    private router: Router, 
    private menuCtrl: MenuController,
    private http: HttpClient
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

  mostrarMenu() {
    this.menuCtrl.open('first');
  }

  // Método genérico para navegar
  navigateTo(route: string) {
    console.log('Navegando a:', route);
    this.router.navigate([route]);
  }
}