import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // importa aqui!


@Injectable({
  providedIn: 'root'
})
export class PotatoApiService{

  constructor(private http: HttpClient) { }  // injeta aqui!

  // exemplo de função para buscar dados de uma API
  pegarDados() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
