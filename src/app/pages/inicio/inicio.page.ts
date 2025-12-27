import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
       } from 'ionicons/icons';

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
    IonItem
  ],
})
export class inicioPage {
  componentes: Componente[] = [
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'albums-outline', name: 'Action Sheet', redirectTo: '/action-sheet' },
    { icon: 'person-circle-outline', name: 'Avatar', redirectTo: '/avatar' },
    { icon: 'square-outline', name: 'Button', redirectTo: '/button' },
    { icon: 'card-outline', name: 'Card', redirectTo: '/card' },
    { icon: 'checkbox-outline', name: 'Checkbox', redirectTo: '/checkbox' },
    { icon: 'calendar-outline', name: 'Datetime', redirectTo: '/datetime' },
    { icon: 'car-outline', name: 'Fab', redirectTo: '/fab' },

  ];

  constructor(private router: Router) {
    // Registrar todos los iconos que se usarán
    addIcons({ alertCircleOutline, 
              albumsOutline, 
              personCircleOutline, 
              squareOutline, 
              cardOutline, 
              checkboxOutline, 
              calendarOutline,
              carOutline,
            });
  }

  // Método para probar que el botón funciona
  testClick() {
    console.log('¡El botón funciona!');
    alert('¡El botón funciona!');
  }

  // Método para navegar programáticamente
  goToAlert() {
    console.log('Intentando navegar a /alert');
    this.router.navigate(['/alert']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToActionSheet() {
    console.log('Intentando navegar a /action-sheet');
    this.router.navigate(['/action-sheet']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToAvatar() {
    console.log('Intentando navegar a /avatar');
    this.router.navigate(['/avatar']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToButton() {
    console.log('Intentando navegar a /button');
    this.router.navigate(['/button']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToCard() {
    console.log('Intentando navegar a /card');
    this.router.navigate(['/card']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToCheckbox() {
    console.log('Intentando navegar a /checkbox');
    this.router.navigate(['/checkbox']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }
  goToDatetime() {
    console.log('Intentando navegar a /datetime');
    this.router.navigate(['/datetime']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  goToFab() {
    console.log('Intentando navegar a /fab');
    this.router.navigate(['/fab']).then(
      success => console.log('Navegación exitosa:', success),
      error => console.error('Error de navegación:', error)
    );
  }

  // Método genérico para navegar
  navigateTo(route: string) {
    console.log('Navegando a:', route);
    this.router.navigate([route]);
  }
}