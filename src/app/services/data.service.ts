import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbumes() {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getHeroes() {
    return this.http.get<any[]>('/assets/data/superheroes.json');
  }

  getData(): Observable<any> {
    return this.http.get('tu-url-api');
  }
}