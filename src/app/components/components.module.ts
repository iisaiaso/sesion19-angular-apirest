import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MostrarPokemonComponent } from './mostrar-pokemon/mostrar-pokemon.component';
import { FormsModule } from '@angular/forms';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MostrarPokemonComponent,
    DetallePokemonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ], 
  exports:[
    HeaderComponent,
    MostrarPokemonComponent
  ]
})
export class ComponentsModule { }
