import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { PopoverController } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  standalone: true,
  imports: [
    IonList,
    IonItem,
    IonLabel,
    CommonModule
  ]
})
export class PopoverInfoComponent implements OnInit {

  items = Array(40);

  constructor(private popoverCtrl: PopoverController) {}

  ngOnInit() {}

  close(itemIndex?: number) {
    this.popoverCtrl.dismiss({
      selected: itemIndex
    });
  }

  onClick(valor: number){
    console.log(valor);
  }
}