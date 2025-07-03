import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  constructor(private http: HttpClient) { }

  loginUser(credentials: any) { // entrara un objeto con el username y uno con el password
    return this.http.post('http://localhost:3000/api/login', credentials)
  }
  saveLocalStorage( key: string, value: any ){
    localStorage.setItem( key, value )
  }
  //sirve para eliminar cualquier llave del localStorage
  deletelocalStorage( key: string ){
    localStorage.removeItem( key )
  }
  //verifica al usuario autenticado
  verifyAuthenticateUser(){
    return this.http.get('http://localhost:3000/api/auth/re-new-token', {headers: this.getHeaders()})
  }

  getHeaders(){
    const token = localStorage.getItem( 'token' ) ?? ''; //obtiene el token del localStorage
    return new HttpHeaders().set( 'X-Token', token );    // Envuelve el token en una header tipo http
  }
}
