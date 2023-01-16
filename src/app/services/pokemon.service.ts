import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlApi = 'https://pokeapi.co/api/v2/pokemon'
  constructor(private http: HttpClient) { }

  getPokemon(){
    return this.http.get<any>(this.urlApi)
  }
}
