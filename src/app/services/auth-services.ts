import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServices {

  private apiUrl = 'http://localhost:3000/api';

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
    return this.http.get('http://localhost:3000/api/auth/re-new-token', {headers: this.getHeaders()}).pipe(
      map( ( data: any ) => { 
        console.log( 'service ', data )
        return data.token
      }),
      catchError(() => {
        return of( false )
      })
    )

    //Ejemplo para explicar xrjs
    // return this.http.get('http://localhost:3000/api/auth/re-new-token', {headers: this.getHeaders()}).pipe( tap ( ( data ) => {
    //   console.log( data )
    //   return data
    // }),
    // map( ( newData: any ) => {
    //   return newData.token.length
    // }),
    // catchError(() => {
    //   return of( false )
    // })
    // ) 
  }

  getHeaders(){
    const token = localStorage.getItem( 'token' ) ?? ''; //obtiene el token del localStorage
    return new HttpHeaders().set( 'X-Token', token );    // Envuelve el token en una header tipo http
  }

  registerUser(credentials: any){
    return this.http.post(`${this.apiUrl}/register`, credentials)
  }
}
