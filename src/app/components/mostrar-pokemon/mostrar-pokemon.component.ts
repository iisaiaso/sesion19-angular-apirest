import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.css']
})
export class MostrarPokemonComponent implements OnInit {
  num: any = [1, 2, 3, 4]
  data!: any[]
  constructor(private pokemon: PokemonService) { }
  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    this.pokemon.getPokemon().subscribe(pokemon => this.data = pokemon)
  }
}
