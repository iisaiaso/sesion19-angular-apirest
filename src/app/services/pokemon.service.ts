import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  urlApi = 'https://pokeapi.co/api/v2'
  constructor(private http: HttpClient) { }

  getPokemon(index:string){
    return this.http.get<any>(`${this.urlApi}/pokemon/${index}`)
  }
}
