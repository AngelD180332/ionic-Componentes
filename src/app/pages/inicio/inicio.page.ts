import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink } from '@ionic/angular/standalone';
import { RouterLinkActive, Router } from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss'],
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton,
    IonRouterLink,
    RouterLinkActive
  ],
})
export class inicioPage {
  constructor(private router: Router) {}

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