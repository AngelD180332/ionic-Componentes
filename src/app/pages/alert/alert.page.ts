import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component"; // ← Importar directamente

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, CommonModule, FormsModule, HeaderComponent]
})
export class AlertPage implements OnInit {

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