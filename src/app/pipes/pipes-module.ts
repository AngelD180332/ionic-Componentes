import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroPipe } from '../pipes/filtro-pipe-module';



@NgModule({
  imports: [
    FiltroPipe,
    CommonModule
  ]
})

export class PipesModule { }
