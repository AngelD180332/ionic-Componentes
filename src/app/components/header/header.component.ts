import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false  // ← AGREGAR ESTA LÍNEA

})
export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
