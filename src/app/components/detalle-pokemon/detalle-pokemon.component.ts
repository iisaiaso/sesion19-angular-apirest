import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-detalle-pokemon',
  templateUrl: './detalle-pokemon.component.html',
  styleUrls: ['./detalle-pokemon.component.css']
})
export class DetallePokemonComponent implements OnInit {
  data: any[] = []
  name = ""
  constructor( private route: ActivatedRoute, private pokemon: PokemonService ) { }

  ngOnInit(): void {
    this.name = String(this.route.snapshot.paramMap.get('name'))
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
          console.log(this.data);
        }, err => {
        }
      )
    }
  }

}
