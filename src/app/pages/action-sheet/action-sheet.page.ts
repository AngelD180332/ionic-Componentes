import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component"; // ← Importar directamente

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton, 
    CommonModule, 
    FormsModule, 
    HeaderComponent // ← Agregar aquí

  ]
})
export class ActionSheetPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToInicio() {
    console.log('Navegando a /inicio...');
    this.router.navigate(['/inicio']);
  }

  goBack() {
    console.log('Regresando atrás...');
    window.history.back();
  }

}