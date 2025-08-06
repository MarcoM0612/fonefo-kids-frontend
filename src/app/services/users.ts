import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Users {
  environment: any 

  constructor( private http: HttpClient) { 
    this.environment = environment
  }
  getUsers () {
    return this.http.get(`${ this.environment.apiUrl }/user`)
  }

}

//ng generate service services/users-service
