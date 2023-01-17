import { PokemonService } from './../../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mostrar-pokemon',
  templateUrl: './mostrar-pokemon.component.html',
  styleUrls: ['./mostrar-pokemon.component.css']
})
export class MostrarPokemonComponent implements OnInit {

  data: any[] = []

  namePokemon!: string

  constructor(private pokemon: PokemonService, private router: Router) { }
  ngOnInit(): void {
    this.getPokemons()
    console.log(this.pokemon)
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
          console.log(this.data);
        }, err => {
        }
      )
    }
  }

  getSearchPokemon(nPokemon: string) {
    this.namePokemon = nPokemon
    if (this.namePokemon != null) {
      confirm('Quieres buscar pokemon' + " " + this.namePokemon.toUpperCase())
      this.router.navigate(['detalle/', this.namePokemon.toUpperCase()])
    } else {
      alert('Ingrese el nombre del pokemon')
    }
  }
}
