import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, CommonModule, FormsModule]
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