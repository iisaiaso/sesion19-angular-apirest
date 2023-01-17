import { DetallePokemonComponent } from './components/detalle-pokemon/detalle-pokemon.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'detalle/:name', component: DetallePokemonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
