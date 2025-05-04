import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';  // importa aqui!

=======
import { HttpClient } from '@angular/common/http'; // Importação do HttpClient
import { Observable } from 'rxjs'; // Importação do  Observable
>>>>>>> 509312d (Atualizações feitas no projeto)

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class PotatoApiService{

  constructor(private http: HttpClient) { }  // injeta aqui!

  // exemplo de função para buscar dados de uma API
  pegarDados() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
=======
export class PotatoapiService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API 

  constructor(private http: HttpClient) { }

  // Método GET para buscar os dados da API
  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
>>>>>>> 509312d (Atualizações feitas no projeto)
