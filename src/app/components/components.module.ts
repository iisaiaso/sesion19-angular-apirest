import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MostrarPokemonComponent } from './mostrar-pokemon/mostrar-pokemon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MostrarPokemonComponent
  ],
  imports: [
    CommonModule
  ], 
  exports:[
    HeaderComponent,
    MostrarPokemonComponent
  ]
})
export class ComponentsModule { }
