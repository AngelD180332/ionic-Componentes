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
import { bulbOutline } from 'ionicons/icons';

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // ← AGREGAR ESTO
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
    // IonIcon no es necesario con CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class inicioPage {
  constructor(private router: Router) {}

  componentes: Componente[] = [
    { icon: 'alert-circle-outline', name: 'Alert', redirectTo: '/alert' },
    { icon: 'albums-outline', name: 'Action Sheet', redirectTo: '/action-sheet' },
  ];

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
}