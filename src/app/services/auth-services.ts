import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient) { }

  loginUser(credentials: any) { // entrara un objeto con el username y uno con el password
    return this.http.post('http://localhost:3000/api/login', credentials)
  }
}
