import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentComponent } from './component';
import { CalculadoraService } from './services';



@NgModule({
  declarations: [
    ComponentComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ComponentComponent
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
