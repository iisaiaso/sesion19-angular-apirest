import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.css']
})
export class MostrarPokemonComponent implements OnInit {
  
  data: any[] = []
  constructor(private pokemon: PokemonService) { }
  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    let pokemonData
    for (let i = 1; i < 150; i++) {
      this.pokemon.getPokemon(String(i)).subscribe(
        res => {
          pokemonData = {
            position: i,
            image: res.sprites.front_default,
            name: res.name,
            orden: res.order
          }
          this.data.push(pokemonData)
          console.log(res);
        }, err => {
        }
      )
    }
  }
}
